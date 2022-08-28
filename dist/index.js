
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./yexaastorybook.cjs.production.min.js')
} else {
  module.exports = require('./yexaastorybook.cjs.development.js')
}
