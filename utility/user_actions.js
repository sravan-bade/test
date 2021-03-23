var util = browser.params.utilities;
var isLoggingOn = browser.params.logging;
var fs = require('fs');

var UserActions = function () {

    this.Click = function (elemnetToClickOn) {
        elemnetToClickOn.isDisplayed().then(function () {
            highlight(elemnetToClickOn);
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.switchToIframe = function () {
        var driver = browser.driver;
        var loc = by.css('.cp-iframe');
        var el = driver.findElement(loc);
        browser.switchTo().frame(el);

    };
    this.switchToDefaultContent = function () {
        browser.switchTo().defaultContent();
        browser.waitForAngular();
    };
    this.waitAndClick = function (elemnetToClickOn, timeOut) {
        util.waitForElementDisplay(elemnetToClickOn, timeOut).then(function () {
            highlight(elemnetToClickOn);
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.mouseMoveAndClick = function (elemnetToClickOn) {
        elemnetToClickOn.isDisplayed().then(function () {
            highlight(elemnetToClickOn);
            util.mouseToElement(elemnetToClickOn).then(function () {
                consoleLog('mouse moved on element ' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to mouse move on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
            elemnetToClickOn.click().then(function () {
                consoleLog('clicked on element' + elemnetToClickOn.locator());
            }, function (error) {
                throw 'Failed to clicked on element ' + elemnetToClickOn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToClickOn + 'not displayed and the error was ' + error;
        });
    };

    this.TypeText = function (elemnetToTypeIn, textToType) {
        elemnetToTypeIn.isDisplayed().then(function () {
            highlight(elemnetToTypeIn);
            elemnetToTypeIn.sendKeys(textToType).then(function () {
                consoleLog('entered text ' + textToType + ' in element' + elemnetToTypeIn.locator());
            }, function (error) {
                throw 'Failed to enter text ' + textToType + ' in element' + elemnetToTypeIn.locator() + ' and the error was ' + error;
            });
        }, function (error) {
            throw 'Given element ' + elemnetToTypeIn.locator() + 'not displayed and the error was ' + error;
        });
    };

    this.ClearAndType = function (elemnetToTypeIn, textToType) {
        elemnetToTypeIn.isDisplayed().then(function () {
            highlight(elemnetToTypeIn);
            elemnetToTypeIn.clear().then(function() {
                elemnetToTypeIn.sendKeys(textToType).then(function () {
                    consoleLog('entered text ' + textToType + ' in element ' + elemnetToTypeIn.locator());
                }, function (error) {
                    throw 'Failed to enter text ' + textToType + ' in element' + elemnetToTypeIn.locator() + ' and the error was ' + error;
                });
            });
        }, function (error) {
            throw 'Given element ' + elemnetToTypeIn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.Clear = function (elemnetToTypeIn) {
        elemnetToTypeIn.isDisplayed().then(function () {
            highlight(elemnetToTypeIn);
            elemnetToTypeIn.clear().then(function() {
                consoleLog('Cleared text field');
            }, function (error) {
                throw 'Failed to clear text field';
            });
        }, function (error) {
            throw 'Given element ' + elemnetToTypeIn.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.SelectByValue = function (elemnet, value) {

        elemnet.all(by.tagName('option'))
            .then(function (options) {
                let val = 'value="'+value+'"';
                options[val].click();
            });


    };

    this.SelectByIndex = function (elemnet, index) {
        elemnet.all(by.tagName('option'))
            .then(function (options) {
                options[index].click();
            });


    };

    this.switchToWindowByIndex = function (n) {
        browser.getAllWindowHandles().then(function (handles) {
            // expect(handles.length).toBeGreaterThan(n);
            browser.switchTo().window(handles[n]);
            consoleLog('Focus switched to ' + (n + 1) + 'numbered window');
        });
    };

    this.closeWindowByIndex = function (n) {
        this.switchToWindowByIndex(n);
        browser.driver.close();
        consoleLog('Closed ' + (n + 1) + 'numbered window');
    };

    this.hitEnterKey = function () {
        browser.actions().sendKeys(protractor.Key.ENTER);
        consoleLog('Hit Enter Button');
    };

    function highlightGivenElementInGivenColor(webElement, color) {
        return browser.executeScript("arguments[0].style.border='3px solid " + color + "'", webElement);
    }

    function highlight(element) {
        var webElement = element.getWebElement();
        highlightGivenElementInGivenColor(webElement, 'red');
        browser.sleep(100);
        highlightGivenElementInGivenColor(webElement, 'green');
        browser.sleep(100);
        browser.executeScript("arguments[0].style.border='0px solid'", webElement);
    };

    function consoleLog(message) {
        if (isLoggingOn)
            console.log('       -> ' + message);
    };

    this.jsClearAndType= function(element, StringToType){
        element.isDisplayed().then(function () {
            highlight(element);
            browser.executeScript("arguments[0].value='';",element).then(function() {
                element.sendKeys(StringToType).then(function () {
                    consoleLog('entered text ' + StringToType + ' in element ' + element.locator());
                }, function (error) {
                    throw 'Failed to enter text ' + StringToType + ' in element' + element.locator() + ' and the error was ' + error;
                });
            });
        }, function (error) {
            throw 'Given element ' + element.locator() + ' not displayed and the error was ' + error;
        });
    };

    this.jsClick= function(element){
        element.isDisplayed().then(function () {
            highlight(element);
            browser.executeScript("arguments[0].click()",element);

        });
    };

    this.verifyFileDownload= function(file) {
        var dirname = __dirname;
        var filename = dirname.substring(0, dirname.length - 8) + "/download-files/" + file;
        browser.driver.wait(function() {
            console.log(filename);
            return fs.existsSync(filename);
        }, 60000).then(function() {
            console.log("File downloaded successfully to ", filename);
        });
    };

    this.deleteAlreadyDownloadedFile= function(file){
        var dirname = __dirname;
        var filename = dirname.substring(0, dirname.length - 8) + "/download-files/" + file;
        if (fs.existsSync(filename))
        {
            // delete if there is any existing file with same name
            fs.unlinkSync(filename);
            console.log("Existing", file, "file deleted from", filename)
        }

    }
};

module.exports = new UserActions();