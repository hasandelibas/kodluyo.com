/*!
 * kodluyo.com - Program(): ogrenci kodunu calistirir.
 * ---------------------------------------------------------------------------
 * Iki calistirici vardir:
 *
 *   JavaScript -> Web Worker (source'u api-javascript-worker.js'te kosar)
 *                 Ayri bir is parcaciginda calistigi icin sonsuz donguye giren
 *                 kod terk() ile OLDURULEBILIR; sayfa donmaz.
 *
 *   Python     -> iframe (api-python-skulpt.html, Skulpt)
 *
 * Kullanim:
 *   let program = Program({"main.js": kod}, {language: "javascript"});
 *   program.onData = function (parca) {}   // canli cikti
 *   program.onEnd  = function (tumCikti) {} // bitti
 *   program.onError= function (mesaj) {}    // hata
 *   program.abort()                        // calistirmayi zorla durdur
 */
var Program = (function () {
  "use strict";

  var WORKER_SCRIPT = "api-javascript-worker.js";

  var workers = {}; // language -> Worker
  var frames = {};  // language -> iframe

  function normalizeLanguage(language) {
    if (language == "javascript" || language == "js" || language == "node" || language == "nodejs") {
      return "javascript";
    }
    return "python";
  }

  function workerUrl() {
    try {
      return new URL(WORKER_SCRIPT, document.baseURI).href;
    } catch (error) {
      return WORKER_SCRIPT;
    }
  }

  function stopWorker(language) {
    var worker = workers[language];
    if (!worker) return;
    try { worker.terminate(); } catch (error) { /* yoksay */ }
    delete workers[language];
  }

  //-- Worker calistirici (JavaScript) --//
  function postToWorker(files, program) {
    var language = program.language;
    // Ayni anda tek is: onceki calistirma varsa durdur.
    stopWorker(language);

    var worker;
    try {
      worker = new Worker(workerUrl());
    } catch (error) {
      // Worker yok ya da engelli -> iframe'e dus.
      return false;
    }
    workers[language] = worker;

    var settled = false;

    function close() {
      settled = true;
      stopWorker(language);
    }

    worker.onmessage = function (event) {
      var response = event.data;
      if (!response || typeof response !== "object") return;
      if (settled) return;
      if (response.onData !== undefined) {
        program.onData(response.onData);
        return;
      }
      if (response.onEnd !== undefined) {
        close();
        program.onEnd(response.onEnd);
        return;
      }
      if (response.onError !== undefined) {
        close();
        program.onError(response.onError);
      }
    };

    worker.onerror = function (event) {
      if (settled) return;
      close();
      var message = event && event.message ? event.message : "Bilinmeyen hata";
      program.onError("Error: " + message);
    };

    try {
      worker.postMessage(files);
    } catch (error) {
      close();
      return false;
    }
    return true;
  }

  //-- iframe calistirici (Python / Skulpt ve Worker olmayan tarayicilar) --//
  function stopFrame(language) {
    var frame = frames[language];
    if (!frame) return;
    frame.pendingFiles = null;
    frame.isLoaded = false;
    try { frame.remove() } catch (error) { /* yoksay */ }
    delete frames[language];
  }

  function postToFrame(files, program) {
    var language = program.language;
    var runnerUrl = language == "javascript" ? "api-javascript.html" : "api-python-skulpt.html"
    var frame = frames[language];

    if (!frame) {
      frame = frames[language] = document.createElement("iframe");
      frame.isLoaded = false;
      frame.pendingFiles = null;
      frame.src = runnerUrl;
      frame.onload = function () {
        frame.isLoaded = true;
        // Yeniden yuklenen iframe'e EN SON gonderilen isi ilet (eski isi degil).
        if (frame.pendingFiles) {
          frame.contentWindow.postMessage(JSON.stringify(frame.pendingFiles), "*");
        }
      };
      document.body.appendChild(frame);
      frame.style.display = "none";
      if (language == "javascript") frame.setAttribute("sandbox", "allow-scripts");
    }

    frame.pendingFiles = files;
    if (frame.isLoaded) {
      frame.contentWindow.postMessage(JSON.stringify(files), "*");
    }

    window.onmessage = function (event) {
      // Yalnizca bu calistiricidan gelen mesajlari isle.
      if (frame && event.source && event.source !== frame.contentWindow) return;
      // Monaco (VS Code) kendi zamanlayicisi icin window.postMessage ile NESNE
      // yollar (orn. {vscodeScheduleAsyncWork:true}). Bunlari JSON.parse etmek
      // hata firlatir; yalnizca string ve gecerli JSON mesajlarini isle.
      if (typeof event.data !== "string") return;
      var response;
      try { response = JSON.parse(event.data); } catch (error) { return }
      if (!response || typeof response !== "object") return;
      if (response.onData !== undefined) program.onData(response.onData);
      if (response.onEnd !== undefined) program.onEnd(response.onEnd);
      if (response.onError !== undefined) program.onError(response.onError);
    };
  }

  function Program(files, options) {
    options = options || {};
    var language = normalizeLanguage(options.language);

    var program = {
      response: "",
      language: language,
      onData: function (data) { console.log("PROGRAM::onData(" + JSON.stringify(data) + ")"); },
      onError: function (data) { console.log("PROGRAM::onError(" + JSON.stringify(data) + ")"); },
      onEnd: function (data) { console.log("PROGRAM::onEnd(" + JSON.stringify(data) + ")"); },
      // Calistirmayi zorla bitirir (sonsuz dongu, zaman asimi...).
      abort: function () {
        stopWorker(language);
        stopFrame(language);
      }
    };

    if (language == "javascript" && typeof Worker !== "undefined" && postToWorker(files, program)) {
      return program;
    }
    postToFrame(files, program);
    return program;
  }

  // Disaridan sifirlama (ornegin zaman asiminda calistiriciyi atmak icin).
  Program.reset = function (language) {
    language = normalizeLanguage(language);
    stopWorker(language);
    stopFrame(language);
  };

  return Program;
})();
