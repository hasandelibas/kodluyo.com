/*!
 * kodluyo.com - JavaScript (mini Node.js) calistirici Worker'i
 * ---------------------------------------------------------------------------
 * Ogrenci kodu AYRI bir is parcaciginda calisir:
 *   - Sayfa (editor + terminal) donmaz.
 *   - Sonsuz donguye giren kod worker.terminate() ile oldurulebilir.
 *
 * Gelen mesaj : dosya sozlugu  { "main.js": "...", "yardimci.js": "..." }
 * Giden mesaj : { onData: "..." } | { onEnd: "..." } | { onError: "..." }
 */
importScripts("./source/javascript-runner.js");

self.onmessage = function (event) {
  var files = event.data;
  if (!files || typeof files !== "object") return;

  var entry = Object.prototype.hasOwnProperty.call(files, "main.js") ? "main.js" : undefined;

  function send(message) {
    self.postMessage(message);
  }

  try {
    KodluyoNode.run(files, {
      entry: entry,
      onData: function (chunk) { send({ onData: chunk }); },
      onEnd: function (output) { send({ onEnd: output }); },
      onError: function (message) { send({ onError: String(message) }); }
    });
  } catch (error) {
    send({ onError: String((error && error.message) || error) });
  }
};
