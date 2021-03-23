const { utils, browser } = require('protractor');
var userActions = require('../../../../../utility/user_actions.js');
var util = require('../../../../../utility/utilities.js');
var commonReusables = require('../../../businesslogic/common_reusables.js');
var userData = require(browser.params.userData);
var ProgramBriefPage = require('../../../po/programBrief_page.js');

var url = userData.oktaProdLoginLink;
var internalProgramBriefpage = userData.oktaProdLoginLink;
var newBriefUrl = userData.prodInternalBriefUrl;
var newBrief = userData.prodInternalBriefId;
var prodBriefHomeUrl = userData.prodBriefHomeUrl;
var prodBriefComments = userData.prodBriefComments;

exports.toWork = ()=> {

    describe('Vonage Internal GCN page features', ()=> {

        it('Validate whether user is able to login and view dashboard successfully', () => {
            browser.get(url);
            commonReusables.Login(userData.oktaProdUserName, browser.params.password);
            browser.sleep(5000);
            userActions.Click(ProgramBriefPage.briefDashboard);
            ProgramBriefPage.briefDashboard.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });
       

        it('Validate whether user is able to view Program Brief successfully', () => {
            browser.get(newBriefUrl);
            userActions.Click(ProgramBriefPage.newBriefUpdateSave);
            browser.get(prodBriefHomeUrl);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            ProgramBriefPage.clickActionsForBriefWithCompanyName('testforinternaltestcases');
            userActions.Click(ProgramBriefPage.newBriefView);
            browser.sleep(5000);
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[1]).then(function(){
                    browser.getCurrentUrl().then(function(url){
                        console.log(url);
                    });
                    expect(browser.getCurrentUrl()).toContain(newBriefUrl);
                    userActions.Click(ProgramBriefPage.nextButton);
                    browser.sleep(2000);
                    ProgramBriefPage.programBriefSuccessMsg.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
                    userActions.closeWindowByIndex(1);
                    userActions.switchToWindowByIndex(0);        
                });
            });
        });

       /* it('Validate whether user is able to send Program Brief customer link successfully', () => {
            ProgramBriefPage.clickActionsForBriefWithCompanyName('testforinternaltestcases');
            userActions.Click(ProgramBriefPage.newBriefSendCustomerLink);
            browser.sleep(2000);
            ProgramBriefPage.newBriefUpdateProdInternalEmailSentSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            
        }); */

        it('Validate whether user is able to update account manager info on Program Brief successfully', () => {
            ProgramBriefPage.clickActionsForBriefWithCompanyName('testforinternaltestcases');
            userActions.Click(ProgramBriefPage.newBriefUpdateAccountManager);
            ProgramBriefPage.accountManagerDialog.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.accountManagerUpdateBtn);
            browser.sleep(2000);
            ProgramBriefPage.newBriefUpdateAccountManagerSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() }); 
        });

        it('Validate whether user is able to export Program Brief successfully', () => {
            ProgramBriefPage.clickActionsForBriefWithCompanyName('testforinternaltestcases');
            var downloadfile = "testforinternaltestcases__"+ newBrief +".pdf";
            userActions.deleteAlreadyDownloadedFile(downloadfile);
            userActions.Click(ProgramBriefPage.newBriefExport);
            //ProgramBriefPage.newBriefExportProgramBrief.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.newBriefDownload);
            userActions.Click(ProgramBriefPage.newBriefDownloadDone);
            browser.sleep(2000);
            userActions.verifyFileDownload(downloadfile);
        });

        it('Validate whether user is able to view raw data in Program Brief successfully', () => {
            ProgramBriefPage.clickActionsForBriefWithCompanyName('testforinternaltestcases');
            userActions.Click(ProgramBriefPage.newBriefRawAuditTrail);
            //ProgramBriefPage.briefRawContent.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            //expect(ProgramBriefPage.briefRawContent.getText()).toContain('[]');
            userActions.Click(ProgramBriefPage.briefRawContentClose);
        });

        it('Validate whether user is able to view Review section in Program Brief successfully', () => {
            browser.get(prodBriefComments);
            //ProgramBriefPage.clickActionsForBriefWithCompanyName('testforcomments');
            //userActions.Click(ProgramBriefPage.newBriefReview);
            ProgramBriefPage.briefCommentButton.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });
        
      /*  it('Validate whether user is able to add comments in Program Brief successfully', () => {

            userActions.Click(ProgramBriefPage.briefCommentButton);
            userActions.ClearAndType(ProgramBriefPage.briefCommentSectionText_dev, "Old Comment");
            userActions.Click(ProgramBriefPage.briefCommentSectionSubmit);
            ProgramBriefPage.oldBriefCommentValidation.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });

        it('Validate whether user is able to Edit comments in Program Brief successfully', () => {

            userActions.Click(ProgramBriefPage.briefCommentEditButton);

            userActions.ClearAndType(ProgramBriefPage.briefCommentEditText_dev, "New Comment");
            userActions.Click(ProgramBriefPage.briefCommentEditTextConfirm_dev);
            ProgramBriefPage.newBriefCommentValidation.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });

        it('Validate whether user is able to Delete comments in Program Brief successfully', () => {

            userActions.Click(ProgramBriefPage.briefCommentDelete);
            userActions.Click(ProgramBriefPage.briefCommentDeleteConfirm);
            util.waitForElementNotPresent(ProgramBriefPage.newBriefCommentValidation, 6000);
        }); */

        it('Validate whether user is able to logout from Program Brief successfully', () => {
            commonReusables.prodInternalLogout();
        });

    }); 
};

