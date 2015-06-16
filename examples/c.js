var tcp = require('net')
var Connection = require('./../lib/spdy/connection')
var Stream = require('./../lib/spdy/stream')

var socket = tcp.connect(9090, function () {
  var conn = new Connection(socket, {isServer: false})
  var s = new Stream(conn, {})

  s.write('hey')
})
