chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  switch (request.requestType) {
  case 'close':
    chrome.experimental.socket.close(request.socketId);
    break;
  case 'connect':
    chrome.experimental.socket.connect(request.socketId, request.hostname, request.port, sendResponse);
    break;
  case 'create':
    chrome.experimental.socket.create(request.type, request.options, sendResponse);
    break;
  case 'destroy':
    chrome.experimental.socket.destroy(request.socketId);
    break;
  case 'read':
    chrome.experimental.socket.read(request.socketId, request.bufferSize, function (result) {
      sendResponse({
        data: Array.prototype.slice.call(new Uint8Array(result.data)),
        resultCode: result.resultCode
      });
    });
    break;
  case 'write':
    chrome.experimental.socket.write(request.socketId, request.data, sendResponse);
    break;
  default:
    throw 'Unknown request type';
  }
});
