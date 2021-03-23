const { utils, browser } = require('protractor');
var userActions = require('../../../../../utility/user_actions.js');
var util = require('../../../../../utility/utilities.js');
var commonReusables = require('../../../businesslogic/common_reusables.js');
var userData = require(browser.params.userData);
var ProgramBriefPage = require('../../../po/programBrief_page.js');

var url = userData.extProgramBriefLink;

exports.toWork = ()=> {

    describe('Vonage External GCN page features', ()=> {

        it('Validate whether user is able to update Program Brief successfully', () => {
            browser.get(url);
            // userActions.Click(ProgramBriefPage.closeBriefPopup);
            userActions.ClearAndType(ProgramBriefPage.contactFirstNameProd, "FirstName"+commonReusables.GenerateRandomNum());
            userActions.ClearAndType(ProgramBriefPage.contactLastNameProd, "LastName"+commonReusables.GenerateRandomNum());
            userActions.Click(ProgramBriefPage.nextButton);
            browser.sleep(2000);
            ProgramBriefPage.programBriefSuccessMsg.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });

    });
};