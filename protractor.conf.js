var phantomjs = require('phantomjs');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/spec.js'],
  capabilities: {
    'browserName': 'phantomjs'
  },
  phantomjs: {
    binary: {
      path: phantomjs.path
    }
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
}