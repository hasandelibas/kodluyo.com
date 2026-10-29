/*!
 * kodluyo.com - JavaScript / Node.js calistirma motoru
 * ------------------------------------------------
 * Tarayici icerisinde kucuk bir Node.js benzeri ortam kurar.
 * Amac, "JavaScript 101" derslerindeki console.log, require,
 * module.exports, fs, path ve process gibi temel Node.js
 * kavramlarini sunucuya ihtiyac duymadan calistirmaktir.
 *
 * Tarayicida  : window.KodluyoNode
 * Node.js'te : require("./javascript-runner")
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.KodluyoNode = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  var MAX_OUTPUT_LENGTH = 200000;
  var IDLE_TIME = 20;
  var MAX_RUN_TIME = 5000;

  // ------------------------------------------------------------------
  // util.inspect benzeri yazdirma
  // ------------------------------------------------------------------
  function isIdentifier(key) {
    return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);
  }

  function quoteString(text) {
    return "'" + String(text)
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "\\'")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/\t/g, "\\t") + "'";
  }

  function inspect(value, depth, seen) {
    depth = depth || 0;
    seen = seen || [];

    if (value === null) return "null";

    var type = typeof value;
    if (type === "undefined") return "undefined";
    if (type === "string") return depth === 0 ? value : quoteString(value);
    if (type === "number") {
      if (Object.is(value, -0)) return "-0";
      return String(value);
    }
    if (type === "boolean" || type === "bigint") return String(value);
    if (type === "symbol") return value.toString();
    if (type === "function") return "[Function: " + (value.name || "anonymous") + "]";
    if (value instanceof Error) return value.stack ? String(value.stack).split("\n")[0] : value.name + ": " + value.message;
    if (seen.indexOf(value) > -1) return "[Circular]";
    if (depth > 3) return Array.isArray(value) ? "[Array]" : "[Object]";

    seen = seen.concat([value]);

    if (Array.isArray(value)) {
      if (value.length === 0) return "[]";
      return "[ " + value.map(function (item) {
        return inspect(item, depth + 1, seen);
      }).join(", ") + " ]";
    }

    if (value instanceof Date) return value.toISOString();
    if (value instanceof RegExp) return value.toString();

    if (value instanceof Map) {
      if (value.size === 0) return "Map(0) {}";
      var mapItems = [];
      value.forEach(function (mapValue, mapKey) {
        mapItems.push(inspect(mapKey, depth + 1, seen) + " => " + inspect(mapValue, depth + 1, seen));
      });
      return "Map(" + value.size + ") { " + mapItems.join(", ") + " }";
    }

    if (value instanceof Set) {
      if (value.size === 0) return "Set(0) {}";
      var setItems = [];
      value.forEach(function (setValue) {
        setItems.push(inspect(setValue, depth + 1, seen));
      });
      return "Set(" + value.size + ") { " + setItems.join(", ") + " }";
    }

    var keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    return "{ " + keys.map(function (key) {
      return (isIdentifier(key) ? key : quoteString(key)) + ": " + inspect(value[key], depth + 1, seen);
    }).join(", ") + " }";
  }

  // ------------------------------------------------------------------
  // util.format benzeri console.log davranisi
  // ------------------------------------------------------------------
  function format(args) {
    args = Array.prototype.slice.call(args);

    if (args.length === 0) return "";

    if (typeof args[0] !== "string") {
      return args.map(function (item) {
        return inspect(item, 0, []);
      }).join(" ");
    }

    var used = 0;
    var text = args[0].replace(/%[sdifjoO%]/g, function (match) {
      if (match === "%%") return "%";
      used++;
      if (used >= args.length) return match;
      var value = args[used];
      switch (match) {
        case "%s":
          return typeof value === "string" ? value : inspect(value, 0, []);
        case "%d":
        case "%i":
          return String(parseInt(value, 10));
        case "%f":
          return String(parseFloat(value));
        case "%j":
          try { return JSON.stringify(value); } catch (error) { return "[Circular]"; }
        case "%o":
        case "%O":
          return inspect(value, 0, []);
        default:
          return match;
      }
    });

    var rest = args.slice(used + 1);
    if (rest.length > 0) {
      text += " " + rest.map(function (item) {
        return inspect(item, 0, []);
      }).join(" ");
    }
    return text;
  }

  // ------------------------------------------------------------------
  // Kucuk POSIX path yardimcilari
  // ------------------------------------------------------------------
  function normalizePath(path) {
    path = String(path == null ? "" : path).replace(/\\/g, "/");
    var parts = path.split("/");
    var output = [];
    for (var index = 0; index < parts.length; index++) {
      var part = parts[index];
      if (part === "" || part === ".") continue;
      if (part === "..") {
        if (output.length > 0) output.pop();
        continue;
      }
      output.push(part);
    }
    return output.join("/");
  }

  function dirnamePath(path) {
    var normalized = normalizePath(path);
    var index = normalized.lastIndexOf("/");
    return index === -1 ? "" : normalized.substring(0, index);
  }

  function joinPath() {
    var parts = [];
    for (var index = 0; index < arguments.length; index++) {
      if (arguments[index] !== undefined && arguments[index] !== null && arguments[index] !== "") {
        parts.push(String(arguments[index]));
      }
    }
    return normalizePath(parts.join("/"));
  }

  function basenamePath(path, extension) {
    var normalized = normalizePath(path);
    var name = normalized.substring(normalized.lastIndexOf("/") + 1);
    if (extension && name.slice(-extension.length) === extension) {
      name = name.slice(0, name.length - extension.length);
    }
    return name;
  }

  function extnamePath(path) {
    var name = basenamePath(path);
    var index = name.lastIndexOf(".");
    if (index <= 0) return "";
    return name.substring(index);
  }

  function resolvePath() {
    var parts = [];
    for (var index = 0; index < arguments.length; index++) {
      if (arguments[index]) parts.push(String(arguments[index]));
    }
    var path = parts.join("/");
    if (path.charAt(0) !== "/") path = "/" + path;
    return "/" + normalizePath(path);
  }

  // -- path modulu icin Node uyumlu yardimcilar ---------------------- //
  // normalizePath sanal dosya sistemi icin bastaki "/" isaretini atar.
  // path modulu ise Node.js gibi davranmali: mutlak yollari korur,
  // bos yolu "." olarak dondurur.
  function nodeNormalize(path) {
    path = String(path == null ? "" : path).replace(/\\/g, "/");
    if (path === "") return ".";
    var absolute = path.charAt(0) === "/";
    var parts = path.split("/");
    var output = [];
    for (var index = 0; index < parts.length; index++) {
      var part = parts[index];
      if (part === "" || part === ".") continue;
      if (part === "..") {
        if (output.length > 0 && output[output.length - 1] !== "..") output.pop();
        else if (!absolute) output.push("..");
        continue;
      }
      output.push(part);
    }
    var result = output.join("/");
    if (absolute) result = "/" + result;
    if (result === "") return absolute ? "/" : ".";
    return result;
  }

  function nodeJoin() {
    var parts = [];
    for (var index = 0; index < arguments.length; index++) {
      var value = arguments[index];
      if (value !== undefined && value !== null && value !== "") parts.push(String(value));
    }
    return nodeNormalize(parts.join("/"));
  }

  function nodeDirname(path) {
    var value = String(path == null ? "" : path).replace(/\\/g, "/");
    value = value.replace(/\/+$/, "");
    if (value === "") return ".";
    var index = value.lastIndexOf("/");
    if (index === -1) return ".";
    if (index === 0) return "/";
    var directory = value.substring(0, index).replace(/\/+$/, "");
    return directory === "" ? "/" : directory;
  }

  function nodeBasename(path, extension) {
    var value = String(path == null ? "" : path).replace(/\\/g, "/");
    value = value.replace(/\/+$/, "");
    var name = value.substring(value.lastIndexOf("/") + 1);
    if (extension && name !== extension && name.slice(-extension.length) === extension) {
      name = name.slice(0, name.length - extension.length);
    }
    return name;
  }

  function nodeExtname(path) {
    var name = nodeBasename(path);
    var index = name.lastIndexOf(".");
    if (index <= 0) return "";
    return name.substring(index);
  }

  function nodeResolve() {
    var resolved = "";
    var index;
    for (index = arguments.length - 1; index >= 0; index--) {
      var value = String(arguments[index] == null ? "" : arguments[index]);
      if (value === "") continue;
      resolved = value + "/" + resolved;
      if (value.charAt(0) === "/") break;
    }
    if (resolved === "") return "/app";
    if (resolved.charAt(0) !== "/") resolved = "/app/" + resolved;
    return nodeNormalize(resolved);
  }

  function nodeRelative(from, to) {
    var fromParts = nodeResolve(from).split("/").filter(function (part) { return part !== ""; });
    var toParts = nodeResolve(to).split("/").filter(function (part) { return part !== ""; });
    var common = 0;
    while (common < fromParts.length && common < toParts.length &&
      fromParts[common] === toParts[common]) {
      common++;
    }
    var output = [];
    for (var index = common; index < fromParts.length; index++) output.push("..");
    for (var target = common; target < toParts.length; target++) output.push(toParts[target]);
    return output.join("/");
  }

  function nodeIsAbsolute(path) {
    return String(path == null ? "" : path).replace(/\\/g, "/").charAt(0) === "/";
  }

  function nodeParse(path) {
    path = String(path == null ? "" : path);
    var root = nodeIsAbsolute(path) ? "/" : "";
    var dir = nodeDirname(path);
    var base = nodeBasename(path);
    var ext = nodeExtname(path);
    var name = ext ? base.substring(0, base.length - ext.length) : base;
    if (dir === ".") dir = "";
    return { root: root, dir: dir, base: base, ext: ext, name: name };
  }

  function nodeFormat(object) {
    object = object || {};
    var dir = object.dir || object.root || "";
    var base = object.base || ((object.name || "") + (object.ext || ""));
    if (!dir) return base;
    return dir === "/" ? "/" + base : dir + "/" + base;
  }

  // ------------------------------------------------------------------
  // Calistirma motoru
  // ------------------------------------------------------------------
  function run(inputFiles, options) {
    options = options || {};

    var files = {};
    for (var fileName in inputFiles) {
      if (Object.prototype.hasOwnProperty.call(inputFiles, fileName)) {
        files[normalizePath(fileName)] = String(inputFiles[fileName]);
      }
    }

    var entry = options.entry || "main.js";
    if (!Object.prototype.hasOwnProperty.call(files, normalizePath(entry))) {
      var candidates = Object.keys(files).filter(function (key) {
        return /\.js$/.test(key);
      });
      entry = candidates.length > 0 ? candidates[0] : Object.keys(files)[0];
    }
    entry = normalizePath(entry);

    var output = "";
    var errorMessage = null;
    var finished = false;
    var exitCode = 0;
    var pendingTimers = 0;
    var intervalIds = {};
    var lastActivity = Date.now();
    var startedAt = Date.now();
    var timerIds = {};
    var nextTimerId = 1;
    // Node.js'te require.main ana (giris) modulu gosterir.
    var mainModule = null;

    var onData = typeof options.onData === "function" ? options.onData : null;
    var onEnd = typeof options.onEnd === "function" ? options.onEnd : null;
    var onError = typeof options.onError === "function" ? options.onError : null;

    var resolvePromise;
    var promise = new Promise(function (resolve) {
      resolvePromise = resolve;
    });

    function write(text) {
      if (finished) return;
      text = String(text);
      if (output.length + text.length > MAX_OUTPUT_LENGTH) {
        text = text.substring(0, Math.max(0, MAX_OUTPUT_LENGTH - output.length));
      }
      if (text.length === 0) return;
      output += text;
      lastActivity = Date.now();
      if (onData) {
        try { onData(text); } catch (ignored) { /* dinleyici hatasi oyunu bozmasin */ }
      }
    }

    function finish(code, error) {
      if (finished) return;
      finished = true;
      exitCode = code == null ? 0 : code;
      if (error) errorMessage = error;

      for (var timerId in timerIds) {
        if (Object.prototype.hasOwnProperty.call(timerIds, timerId)) {
          clearTimeout(Number(timerId));
        }
      }
      for (var intervalId in intervalIds) {
        if (Object.prototype.hasOwnProperty.call(intervalIds, intervalId)) {
          clearInterval(Number(intervalId));
        }
      }

      try {
        if (errorMessage) {
          if (onError) onError(errorMessage);
        } else if (onEnd) {
          onEnd(output);
        }
      } catch (ignored) { /* dinleyici hatasi */ }

      resolvePromise({
        output: output,
        error: errorMessage,
        exitCode: exitCode
      });
    }

    function describeError(error) {
      var name = error && error.name ? error.name : "Error";
      var message = error && error.message ? error.message : String(error);
      var result = name + ": " + message;
      var stack = error && error.stack ? String(error.stack) : "";
      var match = stack.match(/([A-Za-z0-9_.\-]+\.js):(\d+):(\d+)/);
      if (match) result += " (" + match[1] + ":" + match[2] + ")";
      return result;
    }

    function fail(error) {
      finish(1, describeError(error));
    }

    // -- zamanlayicilar -- //
    function scheduleTimeout(callback, delay) {
      var args = Array.prototype.slice.call(arguments, 2);
      var id = nextTimerId++;
      pendingTimers++;
      timerIds[id] = true;
      setTimeout(function () {
        delete timerIds[id];
        try {
          if (typeof callback === "function") callback.apply(null, args);
        } catch (error) {
          fail(error);
        } finally {
          pendingTimers = Math.max(0, pendingTimers - 1);
          checkIdle();
        }
      }, Math.max(0, Number(delay) || 0));
      return id;
    }

    function clearScheduledTimeout(id) {
      if (timerIds[id]) {
        delete timerIds[id];
        pendingTimers = Math.max(0, pendingTimers - 1);
      }
      clearTimeout(id);
    }

    function scheduleInterval(callback, delay) {
      var args = Array.prototype.slice.call(arguments, 2);
      var id = nextTimerId++;
      intervalIds[id] = true;
      setInterval(function () {
        if (finished) return;
        try {
          if (typeof callback === "function") callback.apply(null, args);
        } catch (error) {
          fail(error);
        }
      }, Math.max(1, Number(delay) || 1));
      return id;
    }

    function clearScheduledInterval(id) {
      delete intervalIds[id];
      clearInterval(id);
    }

    function checkIdle() {
      if (finished) return;
      if (Date.now() - startedAt > MAX_RUN_TIME) {
        finish(exitCode);
        return;
      }
      if (pendingTimers > 0) {
        setTimeout(checkIdle, 10);
        return;
      }
      if (Date.now() - lastActivity < IDLE_TIME) {
        setTimeout(checkIdle, 5);
        return;
      }
      finish(exitCode);
    }

    // -- sanal dosya sistemi -- //
    var virtualFiles = {};
    for (var fileKey in files) {
      if (Object.prototype.hasOwnProperty.call(files, fileKey)) {
        virtualFiles[fileKey] = files[fileKey];
      }
    }

    function toVirtualPath(path) {
      path = String(path).replace(/\\/g, "/");
      if (path === "/app") path = "";
      else if (path.indexOf("/app/") === 0) path = path.substring(5);
      else if (path.charAt(0) === "/") path = path.substring(1);
      return normalizePath(path);
    }

    function fileError(code, message) {
      var error = new Error(message);
      error.code = code;
      return error;
    }

    function makeBuffer(text) {
      var buffer = {
        length: text.length,
        toString: function () { return text; },
        valueOf: function () { return text; },
        toJSON: function () { return { type: "Buffer", data: Array.prototype.slice.call(text) }; }
      };
      return buffer;
    }

    function readFileSync(path, encoding) {
      var key = toVirtualPath(path);
      if (!Object.prototype.hasOwnProperty.call(virtualFiles, key)) {
        throw fileError("ENOENT", "ENOENT: no such file or directory, open '" + path + "'");
      }
      var content = virtualFiles[key];
      if (encoding) return content;
      return makeBuffer(content);
    }

    function writeFileSync(path, content) {
      virtualFiles[toVirtualPath(path)] = String(content);
    }

    function appendFileSync(path, content) {
      var key = toVirtualPath(path);
      virtualFiles[key] = (virtualFiles[key] || "") + String(content);
    }

    function existsSync(path) {
      return Object.prototype.hasOwnProperty.call(virtualFiles, toVirtualPath(path));
    }

    function readdirSync(path) {
      var directory = toVirtualPath(path);
      var prefix = directory === "" ? "" : directory + "/";
      var names = {};
      Object.keys(virtualFiles).forEach(function (key) {
        if (key.indexOf(prefix) !== 0) return;
        var remaining = key.substring(prefix.length);
        var name = remaining.split("/")[0];
        if (name) names[name] = true;
      });
      return Object.keys(names);
    }

    function statSync(path) {
      var key = toVirtualPath(path);
      if (!Object.prototype.hasOwnProperty.call(virtualFiles, key)) {
        throw fileError("ENOENT", "ENOENT: no such file or directory, stat '" + path + "'");
      }
      return {
        size: virtualFiles[key].length,
        isFile: function () { return true; },
        isDirectory: function () { return false; }
      };
    }

    function unlinkSync(path) {
      delete virtualFiles[toVirtualPath(path)];
    }

    function mkdirSync() {
      return undefined;
    }

    function copyFileSync(source, target) {
      writeFileSync(target, readFileSync(source, "utf8"));
    }

    function renameSync(source, target) {
      var content = readFileSync(source, "utf8");
      writeFileSync(target, content);
      unlinkSync(source);
    }

    function promiseWrapper(callback) {
      return new Promise(function (resolve, reject) {
        try {
          resolve(callback());
        } catch (error) {
          reject(error);
        }
      });
    }

    var fsModule = {
      readFileSync: readFileSync,
      writeFileSync: writeFileSync,
      appendFileSync: appendFileSync,
      existsSync: existsSync,
      readdirSync: readdirSync,
      statSync: statSync,
      unlinkSync: unlinkSync,
      mkdirSync: mkdirSync,
      copyFileSync: copyFileSync,
      renameSync: renameSync
    };
    fsModule.promises = {
      readFile: function (path) {
        return promiseWrapper(function () { return readFileSync(path, "utf8"); });
      },
      writeFile: function (path, content) {
        return promiseWrapper(function () { writeFileSync(path, content); return undefined; });
      },
      appendFile: function (path, content) {
        return promiseWrapper(function () { appendFileSync(path, content); return undefined; });
      },
      readdir: function (path) {
        return promiseWrapper(function () { return readdirSync(path); });
      },
      mkdir: function () {
        return promiseWrapper(function () { return undefined; });
      },
      stat: function (path) {
        return promiseWrapper(function () { return statSync(path); });
      },
      unlink: function (path) {
        return promiseWrapper(function () { unlinkSync(path); return undefined; });
      }
    };

    var pathModule = {
      sep: "/",
      delimiter: ":",
      normalize: nodeNormalize,
      join: nodeJoin,
      resolve: nodeResolve,
      basename: nodeBasename,
      dirname: nodeDirname,
      extname: nodeExtname,
      relative: nodeRelative,
      parse: nodeParse,
      format: nodeFormat,
      isAbsolute: nodeIsAbsolute
    };

    var osModule = {
      EOL: "\n",
      platform: function () { return "linux"; },
      arch: function () { return "x64"; },
      type: function () { return "Linux"; },
      release: function () { return "6.5.0-kodluyo"; },
      hostname: function () { return "kodluyo"; },
      homedir: function () { return "/home/kodluyo"; },
      tmpdir: function () { return "/tmp"; },
      cpus: function () { return [{ model: "kodluyo-cpu", speed: 2400 }]; },
      totalmem: function () { return 8589934592; },
      freemem: function () { return 4294967296; }
    };

    var utilModule = {
      format: format,
      inspect: function (value) { return inspect(value, 0, []); }
    };

    function EventEmitter() {
      this._events = {};
    }
    EventEmitter.prototype.on = function (name, listener) {
      this._events[name] = this._events[name] || [];
      this._events[name].push(listener);
      return this;
    };
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype.once = function (name, listener) {
      var self = this;
      function wrapper() {
        self.off(name, wrapper);
        listener.apply(self, arguments);
      }
      return this.on(name, wrapper);
    };
    EventEmitter.prototype.off = function (name, listener) {
      if (!this._events[name]) return this;
      this._events[name] = this._events[name].filter(function (item) {
        return item !== listener;
      });
      return this;
    };
    EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
    EventEmitter.prototype.emit = function (name) {
      var args = Array.prototype.slice.call(arguments, 1);
      var listeners = (this._events[name] || []).slice();
      var self = this;
      listeners.forEach(function (listener) {
        listener.apply(self, args);
      });
      return listeners.length > 0;
    };

    var eventsModule = { EventEmitter: EventEmitter };

    function createConsole() {
      var consoleObject = {};
      ["log", "info", "debug", "warn", "error"].forEach(function (method) {
        consoleObject[method] = function () {
          write(format(arguments) + "\n");
        };
      });
      consoleObject.dir = function (value) {
        write(inspect(value, 1, []) + "\n");
      };
      consoleObject.table = function (value) {
        write(inspect(value, 0, []) + "\n");
      };
      consoleObject.trace = function () {
        write("Trace" + (arguments.length ? ": " + format(arguments) : "") + "\n");
      };
      consoleObject.assert = function (condition) {
        if (!condition) {
          var rest = Array.prototype.slice.call(arguments, 1);
          write("Assertion failed" + (rest.length ? ": " + format(rest) : "") + "\n");
        }
      };
      var timers = {};
      consoleObject.time = function (label) {
        timers[label || "default"] = Date.now();
      };
      consoleObject.timeEnd = function (label) {
        label = label || "default";
        if (timers[label] !== undefined) {
          write(label + ": " + (Date.now() - timers[label]) + "ms\n");
          delete timers[label];
        }
      };
      return consoleObject;
    }

    var consoleObject = createConsole();

    var processObject = {
      argv: ["/usr/local/bin/node", "/app/" + entry].concat(options.args || []),
      env: {
        NODE_ENV: options.env && options.env.NODE_ENV ? options.env.NODE_ENV : "development",
        HOME: "/home/kodluyo",
        USER: "kodluyo",
        PATH: "/usr/local/bin:/usr/bin:/bin"
      },
      platform: "linux",
      arch: "x64",
      version: "v20.11.0",
      versions: { node: "20.11.0", v8: "11.3.244.8-node.17" },
      pid: 1453,
      cwd: function () { return "/app"; },
      exit: function (code) {
        finish(typeof code === "number" ? code : 0);
      },
      nextTick: function (callback) {
        var args = Array.prototype.slice.call(arguments, 1);
        pendingTimers++;
        Promise.resolve().then(function () {
          try {
            if (typeof callback === "function") callback.apply(null, args);
          } catch (error) {
            fail(error);
          } finally {
            pendingTimers = Math.max(0, pendingTimers - 1);
            checkIdle();
          }
        });
      },
      stdout: {
        write: function (text) { write(text); return true; },
        isTTY: false
      },
      stderr: {
        write: function (text) { write(text); return true; },
        isTTY: false
      }
    };

    var BufferObject = {
      from: function (value) { return makeBuffer(String(value)); },
      isBuffer: function (value) { return value && value.toJSON && value.toJSON().type === "Buffer"; }
    };

    var sandboxGlobal = {
      console: consoleObject,
      process: processObject,
      require: null,
      module: null,
      exports: null,
      Buffer: BufferObject,
      setTimeout: scheduleTimeout,
      setInterval: scheduleInterval,
      clearTimeout: clearScheduledTimeout,
      clearInterval: clearScheduledInterval,
      setImmediate: function (callback) {
        var args = Array.prototype.slice.call(arguments, 1);
        return scheduleTimeout.apply(null, [callback, 0].concat(args));
      },
      clearImmediate: clearScheduledTimeout,
      queueMicrotask: function (callback) {
        Promise.resolve().then(function () {
          try { callback(); } catch (error) { fail(error); }
        });
      },
      global: null
    };
    sandboxGlobal.global = sandboxGlobal;
    sandboxGlobal.globalThis = sandboxGlobal;

    var moduleCache = {};

    function coreModule(request) {
      request = String(request).replace(/^node:/, "");
      switch (request) {
        case "path":
        case "path/posix":
          return pathModule;
        case "fs":
          return fsModule;
        case "fs/promises":
          return fsModule.promises;
        case "os":
          return osModule;
        case "util":
          return utilModule;
        case "events":
          return eventsModule;
        case "buffer":
          return { Buffer: BufferObject };
        default:
          return null;
      }
    }

    function resolveRequest(request, parentDirectory) {
      request = String(request).replace(/\\/g, "/");
      if (!(request.charAt(0) === "." || request.charAt(0) === "/")) return null;

      var base;
      if (request.charAt(0) === "/") {
        base = normalizePath(request);
      } else {
        base = normalizePath((parentDirectory ? parentDirectory + "/" : "") + request);
      }

      var candidates = [base, base + ".js", base + ".json", base + "/index.js"];
      for (var index = 0; index < candidates.length; index++) {
        if (Object.prototype.hasOwnProperty.call(files, candidates[index])) {
          return candidates[index];
        }
      }
      return base;
    }

    function loadModule(request, parentDirectory) {
      var core = coreModule(request);
      if (core) return core;

      var key = resolveRequest(request, parentDirectory);
      if (key === null) {
        throw new Error("Cannot find module '" + request + "'");
      }
      if (!Object.prototype.hasOwnProperty.call(files, key)) {
        throw new Error("Cannot find module '" + request + "'");
      }
      if (moduleCache[key]) return moduleCache[key].exports;

      if (/\.json$/.test(key)) {
        var jsonModule = { exports: JSON.parse(files[key]) };
        moduleCache[key] = jsonModule;
        return jsonModule.exports;
      }

      var module = { exports: {}, id: key, filename: "/app/" + key, loaded: false };
      moduleCache[key] = module;
      if (key === entry) mainModule = module;

      var directory = dirnamePath(key);
      var wrapper = new Function(
        "exports", "require", "module", "__filename", "__dirname",
        "process", "console", "global", "Buffer",
        "setTimeout", "setInterval", "clearTimeout", "clearInterval",
        "setImmediate", "clearImmediate", "queueMicrotask",
        files[key] + "\n//# sourceURL=" + key
      );

      var moduleRequire = function (childRequest) {
        return loadModule(childRequest, directory);
      };
      moduleRequire.main = mainModule;
      moduleRequire.resolve = function (request) {
        var resolved = resolveRequest(request, directory);
        if (resolved === null) throw new Error("Cannot find module '" + request + "'");
        return resolved;
      };

      wrapper(
        module.exports,
        moduleRequire,
        module,
        "/app/" + key,
        "/app" + (directory ? "/" + directory : ""),
        processObject,
        consoleObject,
        sandboxGlobal,
        BufferObject,
        scheduleTimeout,
        scheduleInterval,
        clearScheduledTimeout,
        clearScheduledInterval,
        sandboxGlobal.setImmediate,
        sandboxGlobal.clearImmediate,
        sandboxGlobal.queueMicrotask
      );

      module.loaded = true;
      return module.exports;
    }

    sandboxGlobal.require = function (request) {
      return loadModule(request, "");
    };

    try {
      loadModule("./" + entry, "");
    } catch (error) {
      fail(error);
      return { promise: promise };
    }

    lastActivity = Date.now();
    checkIdle();

    return {
      promise: promise,
      cancel: function () { finish(exitCode); }
    };
  }

  return {
    run: run,
    format: format,
    inspect: function (value) { return inspect(value, 0, []); }
  };
});
