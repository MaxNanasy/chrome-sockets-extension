chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  switch (request.requestType) {
  case 'create':
    chrome.experimental.socket.create(request.type, request.options, sendResponse);
    break;
  default:
    throw 'Unknown request type';
  }
});
