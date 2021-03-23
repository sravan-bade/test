exports.toWork = function (reporter) {
    //  console.log("############# onPrepare Blocked called #############");
    var mkdirp = require('mkdirp');
    var fs = require('fs');
    var util = require(browser.params.utilities);

    //Delete all previous reports data
    browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('test_reports/allure-results');
    browser.params.aggregateReporting ? console.log("aggregateReporting is ON") : util.deleteFolderRecursive('target');

    //Browser Settings:
    browser.driver.manage().timeouts().implicitlyWait(30000);
    browser.driver.manage().timeouts().setScriptTimeout(60000);
    // browser.driver.manage().window().setPosition(0, 0);
    // browser.driver.manage().window().maximize();
    //browser.driver.manage().window().setSize(1280, 768);
    browser.ignoreSynchronization = true;

    //JsonReporter
    mkdirp.sync('test_reports/json_reports');

    //Spec Reporter
    var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: true
        }
    }));

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'test_reports/xml_reports',
        filePrefix: 'xmlresults'
    }));

    var fs1 = require('fs-extra');

    fs1.emptyDir('test_reports/reports', function (err) {
        //console.log(err);
    });

    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');

                    browser.takeScreenshot().then(function (png) {
                        //  var screenshotName = result.fullName.split(/[^A-Za-z0-9 ]/)[0].trim();
                        //  //screenshotName=screenshotName.trim();
                        // // var screenshotName = name[0];
                        console.log(result.fullName);
                        var stream = fs1.createWriteStream('test_reports/reports/'+ browserName + '-' +result.fullName+'.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

    //Using Allure Reporter
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'test_reports/allure-results'
    }));
    jasmine.getEnv().afterEach(function (done) {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
        })
    });
}