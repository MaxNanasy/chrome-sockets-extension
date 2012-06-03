window.addEventListener('chrome-sockets-extension:connect', function (event) {
  chrome.extension.sendRequest({
    requestType: 'connect',
    socketId: event.detail.socketId,
    hostname: event.detail.hostname,
    port: event.detail.port,
  }, event.detail.callback);
});
window.addEventListener('chrome-sockets-extension:create', function (event) {
  chrome.extension.sendRequest({
    requestType: 'create',
    type: event.detail.type,
    options: event.detail.options
  }, event.detail.callback);
});
window.addEventListener('chrome-sockets-extension:read', function (event) {
  chrome.extension.sendRequest({
    requestType: 'read',
    socketId: event.detail.socketId,
    data: event.detail.data,
  }, function (result) {
    event.detail.callback({
      data: new Uint8Array(result.data),
      resultCode: result.resultCode
    });
  });
});
