var tcp = require('net')
var Connection = require('./../lib/spdy/connection')
var Stream = require('./../lib/spdy/stream')

tcp.createServer(function (socket) {
  var conn = new Connection(socket, {isServer: true})

}).listen(9090)
