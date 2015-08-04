exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
}