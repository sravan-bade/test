const { utils } = require('protractor');
var userActions = require('../../../../../utility/user_actions.js');
var util = require('../../../../../utility/utilities.js');
var commonReusables = require('../../../businesslogic/common_reusables.js');
var userData = require(browser.params.userData);
var ProgramBriefPage = require('../../../po/programBrief_page.js');
var ShortCodePage = require('../../../po/shortCode_page.js');

var url = userData.devInternalBriefId;
var shortCodeNumber = Math.floor(Math.random()*9000) + 20000;;

exports.toWork = ()=> {

    describe('page features', ()=> {

        it('Validate whether user is able to login to Short Code user successfully', () => {
            browser.get(url);
            commonReusables.Login(userData.oktaUserName, browser.params.password);
            browser.sleep(5000);
            userActions.Click(ProgramBriefPage.briefDashboard);

        });
        
        it('Validate whether user is able to add short code successfully', () => {
            userActions.Click(ShortCodePage.inventory);
            userActions.Click(ShortCodePage.addShortCode);
            userActions.Click(ShortCodePage.dedicatedShortCode);
            userActions.ClearAndType(ShortCodePage.shortCodeNumberProvisioned, shortCodeNumber);
            userActions.Click(ShortCodePage.region);
            userActions.Click(ShortCodePage.usRegion);
            userActions.Click(ShortCodePage.shortCodeStatus);
            userActions.Click(ShortCodePage.inprogressShortCodeStatus);
            userActions.Click(ShortCodePage.typeOfCode);
            userActions.Click(ShortCodePage.randomTypeOfCode);
            userActions.Click(ShortCodePage.features);
            userActions.Click(ShortCodePage.smsFeature);
            userActions.ClearAndType(ShortCodePage.customerName, "Dinesh");
            userActions.Click(ShortCodePage.currentAggregator);
            userActions.Click(ShortCodePage.mGageCurrentAggregator);
            userActions.ClearAndType(ShortCodePage.apiKey, "test");
            userActions.Click(ShortCodePage.vonageLeased);
            userActions.Click(ShortCodePage.yesVonageLeased);
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
                userActions.Click(ShortCodePage.carrier);
                userActions.ClearAndType(ShortCodePage.carrier, "310004");
                userActions.Click(ShortCodePage.verizonCarrier);
                userActions.Click(ShortCodePage.provisioningStatus);
                userActions.Click(ShortCodePage.processingProvisioningStatus);
                userActions.Click(ShortCodePage.submitShortCode);
                browser.sleep(5000);
                ShortCodePage.successfullyCreatedShortCode.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });    
            });
        });

        it('Validate whether user is able to edit short code successfully', () => {
            browser.navigate().refresh();
            userActions.jsClearAndType(ShortCodePage.shortCodeSearch, shortCodeNumber);
            browser.sleep(5000);

            userActions.Click(ShortCodePage.shortCodeActions);
            userActions.Click(ShortCodePage.shortCodeEdit);
            userActions.ClearAndType(ShortCodePage.customerNameEdit, "Dinesh Edit");
            userActions.Click(ShortCodePage.submitShortCode);
            browser.sleep(5000);
            element(by.xpath("//span[contains(text(),'Short code "+ shortCodeNumber +" updated.')]")).isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
        });

        it('Validate whether user is able to logout from Short Code page successfully', () => {
            commonReusables.Logout();
        });

    });
};

