function create() {
  chrome.experimental.socket.create('tcp', {}, function (socketInfo) {
    console.log(socketInfo);
  });
}
