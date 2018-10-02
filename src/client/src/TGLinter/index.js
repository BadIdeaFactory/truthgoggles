var keys = require('object-keys')
var difference = require('lodash.difference')
var intersection = require('lodash.intersection')
var pluralize = require('pluralize')
var nlcstToString = require('nlcst-to-string')
var quotation = require('quotation')
var search = require('nlcst-search')
var polibiased = require('polibiased')

/* Misclassified singulars and plurals. */
var skip = [
  'children'
]

module.exports = tgLinter

var words = unpack(polibiased)

/* List of values not to normalize. */
var APOSTROPHES = ['hell']

/* Map of `polibiased` ratings to prefixes. */
var PREFIX = [
  'Reconsider',
  'Reconsider',
  'Reconsider'
]

/* Map of `polibiased` ratings to suffixes. */
var SUFFIX = [
  'it’s a word/phrase that people interpret differently',
  'gets a gut reaction',
  'just cause'
]

function tgLinter(options) {
  var ignore = (options || {}).ignore || []
  var phrases = difference(keys(words), ignore)
  var apostrophes = difference(phrases, APOSTROPHES)
  var noApostrophes = intersection(APOSTROPHES, phrases)

  return transformer

  /* Search for violations. */
  function transformer(tree, file) {
    search(tree, apostrophes, handle)
    search(tree, noApostrophes, handle, true)

    /* Handle a match. */
    function handle(match, position, parent, phrase) {
      var rating = words[phrase]
      var value = nlcstToString(match)

      var message = file.warn([
        PREFIX[rating],
        quotation(value, '“', '”') + ',',
        SUFFIX[rating]
      ].join(' '), {
        start: match[0].position.start,
        end: match[match.length - 1].position.end
      })

      message.ruleId = phrase.replace(/\W+/g, '-')
      message.politicalLeaning = rating
      message.source = 'tgLinter'
      message.actual = value
      message.expected = null
    }
  }
}

function unpack(map) {
  var result = {}
  var key
  var rating

  for (key in map) {
    rating = map[key]
    add(key, rating)
    add(pluralize.singular(key), rating)
    add(pluralize.plural(key), rating)
  }

  function add(key, value) {
    if (skip.indexOf(key) === -1) {
      result[key] = value
    }
  }

  return result
}