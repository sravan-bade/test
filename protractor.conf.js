
// for dashboard//

var myReporterObject = require('./my.html.report.js');
const retry = require('protractor-retry').retry;
var d = new Date();

if((process.platform === 'win32') || (process.platform === 'darwn')){
    var args = [ '--disable-extensions', '--start-maximized','--disable-infobars'];
} else {
    var args = ['--headless', '--disable-extensions', '--start-maximized','--disable-infobars'];
}


exports.config = {
    directConnect: true,
    plugins: [{
        path: 'aurelia.protractor.js',
        package: 'protractor-console',
        logLevels: ['severe','info']
    }],
    suites: {
        home: 'features/vonage_gcn/run.suite.js',
    },
    noGlobals: false,
    getPageTimeout: 10000,
    allScriptsTimeout: 100000,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': args,
            'prefs': {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': __dirname + "/download-files"
                }
            }
        },
        marionette:true,
        prefs: {
            'downloads': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'default_directory': __dirname + "/download-files"
            }
        },
        maxInstances: 3,
        shardTestFiles: true
    },

    beforeLaunch: function () {
        return myReporterObject.beforeLaunchMethod();
    },

    onCleanUp: function (results) {
        retry.onCleanUp(results);
    },

    onPrepare: function () {
        require('./protractor.prepare.js').toWork();
        retry.onPrepare();
    },

    afterLaunch: function (exitCode) {
        return retry.afterLaunch(2);
    },

    onComplete:function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            //Html Screenshot reporter
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputFilename: 'ProtractorTestReport' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds(),
                outputPath: 'test_reports/reports',
                screenshotPath: '../reports',
                testBrowser: browserName,
                browserVersion: browserVersion

            };
            new HTMLReport().from('test_reports/xml_reports/xmlresults.xml', testConfig);
        });
    },

    params: {
        userData: __dirname + "/data/run_data/user_data.js",
        applicationData: __dirname + "/data/run_data/application_data.js",
        userActions: __dirname + "/utility/user_actions",
        utilities: __dirname + "/utility/utilities",
        logging: false,
        aggregateReporting: false,
        password: "default"
    },

    resultJsonOutputFile: "test_reports/json_reports/Testresult.json",
    restartBrowserBetweenTests: false,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 350000,
        print: function () {
        }
    }
};