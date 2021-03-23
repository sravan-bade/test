var userActions = require('../../../../../utility/user_actions.js');
var util = require('../../../../../utility/utilities.js');
var commonReusables = require('../../../businesslogic/common_reusables.js');
var userData = require(browser.params.userData);
var ProgramBriefPage = require('../../../po/programBrief_page.js');
var path = require('path');

var url = userData.devExternalBriefId;

exports.toWork = ()=> {

    describe('Google page features', ()=> {

        it('Validate whether user is able to update Program Brief successfully', () => {
            browser.get(url);
            userActions.Click(ProgramBriefPage.closeBriefPopup);
            userActions.Click(ProgramBriefPage.programInformation);
            
            var fileToUpload = '../../../../../data/upload_file.pdf',
            absolutePath = path.resolve(__dirname, fileToUpload);

            userActions.jsClick(ProgramBriefPage.smsTandCButton);
            browser.sleep(100000);
            browser.findElement(by.css('input[type=file]')).sendKeys(absolutePath);

            userActions.jsClearAndType(ProgramBriefPage.smsTandC, absolutePath);
            ProgramBriefPage.uploadedFile.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.uploadFileDelete);
            util.waitForElementNotPresent(ProgramBriefPage.uploadedFile, 6000);

        });

    });
};