window.addEventListener('chrome-sockets-extension:create', function (event) {
  chrome.extension.sendRequest({
    requestType: 'create',
    type: event.detail.type,
    options: event.detail.options
  }, event.detail.callback);
});
