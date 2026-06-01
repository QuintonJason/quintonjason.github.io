var fs = require("fs")
var https = require("https")

module.exports = function(url, dest, cb) {
  var file = fs.createWriteStream(dest)
  var sendReq = https.get(url, function(response) {
    if (response.statusCode !== 200) {
      file.close()
      fs.unlink(dest, function() {})
      return cb("Response status was " + response.statusCode)
    }

    response.pipe(file)
  })

  sendReq.on("error", function(err) {
    fs.unlink(dest)

    if (cb) {
      return cb(err.message)
    }
  })

  file.on("finish", function() {
    file.close(cb) // close() is async, call cb after close completes.
  })

  file.on("error", function(err) {
    // Handle errors
    fs.unlink(dest)

    // Delete the file async. (But we don't check the result)
    if (cb) {
      return cb(err.message)
    }
  })
}
