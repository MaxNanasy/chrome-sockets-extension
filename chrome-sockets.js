(function () {
  
  chrome.experimental || (chrome.experimental = {});
  if (chrome.experimental.socket) return;
  
  chrome.experimental.socket = {};
  
  chrome.experimental.socket.create = function (socketType, options, callback) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('chrome-sockets-extension:create', undefined, undefined, {
      type: socketType,
      options: options,
      callback: callback
    });
    window.dispatchEvent(event);
  };
  
})();
