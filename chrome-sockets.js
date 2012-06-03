(function () {
  
  chrome.experimental || (chrome.experimental = {});
  if (chrome.experimental.socket) return;
  
  chrome.experimental.socket = {};
  
  chrome.experimental.socket.connect = function (socketId, hostname, port, callback) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('chrome-sockets-extension:connect', undefined, undefined, {
      socketId: socketId,
      hostname: hostname,
      port: port,
      callback: callback
    });
    window.dispatchEvent(event);
  };
  chrome.experimental.socket.create = function (socketType, options, callback) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('chrome-sockets-extension:create', undefined, undefined, {
      type: socketType,
      options: options,
      callback: callback
    });
    window.dispatchEvent(event);
  };
  chrome.experimental.socket.read = function (socketId, bufferSize, callback) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('chrome-sockets-extension:read', undefined, undefined, {
      socketId: socketId,
      bufferSize: bufferSize,
      callback: callback
    });
    window.dispatchEvent(event);
  };
  
})();
