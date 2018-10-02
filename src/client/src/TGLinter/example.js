
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var english = require('retext-english')
var stringify = require('retext-stringify')
var tglinter = require('./index.js')

unified()
  .use(english)
  .use(tglinter)
  .use(stringify)
  .process(vfile.readSync('example.txt'), function (err, file) {
    console.log(report(err || file))
  })