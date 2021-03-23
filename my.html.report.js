var HTMLReportsConfig = function () {
  var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
  var reporter = new HtmlScreenshotReporter({
    dest: 'test_reports/html_reports',
    filename: 'Myreports.html',
    userCss: '../../my-styles.css',
    //ignoreSkippedSpecs: true
    showQuickLinks: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "Vonage E2E Tests Results",
    showConfiguration: true,
    configurationStrings: {
      "language": "param1",
      "My 2nd Param": "test"
    },
    pathBuilder: function (currentSpec, suites, browserCapabilities) {
      // will return chrome/your-spec-name.png
      var filename = currentSpec.fullName.toString().replace(/ /g, '');
      return browserCapabilities.get('browserName') + '/' + filename;
    }
  });

  this.needGlobally = reporter;

  this.beforeLaunchMethod = function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  };

  this.afterLaunchMethod = function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
module.exports = new HTMLReportsConfig();