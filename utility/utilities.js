'use strict';
var Utills = function () {
    var EC = protractor.ExpectedConditions;
    this.shortWaitTime = 5000;
    this.longWaitTime = 60000;
    var fs = require('fs');
    var self = this;

    this.waitForElementToBeClickable = function (pageElement, waitTime) {
        browser.wait(EC.elementToBeClickable(pageElement), waitTime);
    };

    this.waitForElementToBeSelected = function (pageElement, waitTime) {
        browser.wait(EC.elementToBeSelected(pageElement), waitTime);
    };

    this.waitForAlertToBePresent = function (waitTime) {
        browser.wait(EC.alertIsPresent(), waitTime);
    };

    this.waitForElementWithText = function (pageElement, elementText, waitTime) {
        browser.wait(EC.textToBePresentInElement(pageElement, elementText), waitTime);
    };

    this.waitForElementWithValue = function (pageElement, elementValue, waitTime) {
        browser.wait(EC.textToBePresentInElementValue(pageElement, elementValue), waitTime);
    };

    this.waitForPageTitleContains = function (partialPageTitle, waitTime) {
        browser.wait(EC.titleContains(partialPageTitle), waitTime);
    };

    this.waitForPageTitle = function (pageTitle, waitTime) {
        browser.wait(EC.titleIs(pageTitle), waitTime);
    };

    this.waitForURLContains = function (partialURLText, waitTime) {
        browser.wait(EC.urlContains(partialURLText), waitTime);
    };

    //InDOM
    this.waitForElementPresent = function (pageElement, waitTime) {
        browser.wait(EC.presenceOf(pageElement), waitTime);
    };

    this.waitForElementNotPresent = function (pageElement, waitTime) {
        browser.wait(EC.stalenessOf(pageElement), waitTime);
    };

    //display Yes
    this.waitForElementVisibility = function (pageElement, waitTime) {
        browser.wait(EC.visibilityOf(pageElement), waitTime);
    };

    this.waitForElementInvisibility = function (pageElement, waitTime) {
        browser.wait(EC.invisibilityOf(pageElement), waitTime);
    };

    this.isElementPresent = function (pageElement) {
        return pageElement.isPresent().then(function (value) {
            return value;
        });
    };

    this.isElementDisplayed = function (pageElement) {
        return pageElement.isDisplayed().then(function (value) {
            return value;
        });
    };

    //Same as waitForElementVisibility
    this.waitForElementDisplay = function (elementToBeDisplayed, timeOut) {
        return browser.wait(function () {
            return elementToBeDisplayed.isDisplayed().then(function (val) {
                return true;
            }, function () {
                return false;
            });
        }, timeOut);
    };

    //Same as waitForElementNotPresent
    this.waitForElementDisappear = function (elementToBeDisplayed, timeOut) {
        browser.wait(function () {
            return elementToBeDisplayed.isDisplayed().then(function (val) {
                return !val;
            });
        }, timeOut);
    };

    this.mouseToElement = function (givenElement) {
        return browser.actions().mouseMove(givenElement).perform();
    };

    this.rightClickOnElement = function (givenElement) {
        browser.actions().mouseMove(givenElement).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
    };

    this.getRandomNumber = function () {
        return new Date().getTime();
    };

    this.dragDrop = function (dragElement, dropElement) {
        browser.actions().dragAndDrop(dragElement, dropElement).perform();
    };

    this.deleteFolderRecursive = function (path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach(function (file, index) {
                var curPath = path + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    self.deleteFolderRecursive(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };
};

module.exports = new Utills();