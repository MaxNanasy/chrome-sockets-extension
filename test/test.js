function getData() {
  var
    hostname = document.getElementById('hostname').value,
    port = +document.getElementById('port').value;
  function error(message) {
    document.getElementById('errorMessage').innerText = message;
  }
  chrome.experimental.socket.create('tcp', {}, function (socketInfo) {
    var socketId = socketInfo.socketId;
    if (socketId <= 0) return error('Unable to create socket: ' + socketId);
    chrome.experimental.socket.connect(socketId, hostname, port, function (result) {
      if (result < 0) return error('Unable to connect to ' + hostname + ' at port ' + port + ': ' + result);
      chrome.experimental.socket.read(socketId, undefined, function (result) {
        if (result.resultCode < 0) return error('Unable to read from connection: ' + result.resultCode);
        document.getElementById('socketOutput').innerText = Array.prototype.map.call(new Uint8Array(result.data), String.fromCharCode).join('');
      });
    });
  });
}
