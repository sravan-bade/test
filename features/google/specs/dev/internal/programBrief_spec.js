const { utils } = require('protractor');
var userActions = require('../../../../../utility/user_actions.js');
var util = require('../../../../../utility/utilities.js');
var commonReusables = require('../../../businesslogic/common_reusables.js');
var userData = require(browser.params.userData);
var ProgramBriefPage = require('../../../po/programBrief_page.js');

var url = userData.devInternalBriefId;
var internalProgramBriefpage = userData.internalProgramBriefpage;
var newBrief = "";

exports.toWork = ()=> {

    describe('Vonage Internal GCN page features', ()=> {

        it('Validate whether user is able to login and click comments section in Program Brief successfully', () => {
            browser.get(url);
            commonReusables.Login(userData.oktaUserName, browser.params.password);
            browser.sleep(5000);
            userActions.Click(ProgramBriefPage.briefDashboard);
            ProgramBriefPage.briefCommentButton.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });

        });
        
        it('Validate whether user is able to add comments in Program Brief successfully', () => {

            userActions.jsClick(ProgramBriefPage.briefCommentButton);
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
        });

        it('Validate whether user is able to create new Program Brief successfully', () => {

            userActions.Click(ProgramBriefPage.newBrief);
            browser.sleep(3000);
            userActions.ClearAndType(ProgramBriefPage.companyName, "test");
            userActions.ClearAndType(ProgramBriefPage.contactFirstName, "test");
            userActions.ClearAndType(ProgramBriefPage.contactLastName, "test");
            userActions.ClearAndType(ProgramBriefPage.contactEmail, "dinesh.itty@vonage.com");
            userActions.ClearAndType(ProgramBriefPage.accManagerFirstName, "test");
            userActions.ClearAndType(ProgramBriefPage.accManagerLastName, "test");
            ProgramBriefPage.accManagerLastName.sendKeys(protractor.Key.TAB);
            userActions.ClearAndType(ProgramBriefPage.accManagerEmail, "dinesh.itty@vonage.com");
            browser.executeScript('window.scrollTo(0,document.body.scrollHeight);').then(function () {
                userActions.Click(ProgramBriefPage.briefSubmit);
                browser.sleep(2000);
                ProgramBriefPage.briefNewSuccessMsg.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            });
        });

        it('Validate whether user is able to view and edit newly created Program Brief successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('New');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('test');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefView);
            browser.sleep(5000);
            browser.getAllWindowHandles().then(function(handles){
                browser.switchTo().window(handles[1]).then(function(){
                    browser.getCurrentUrl().then(function(url){
                        console.log(url);
                        newBrief = url.split("/");
                        newBrief = newBrief[5];
                    });
                    userActions.ClearAndType(ProgramBriefPage.newBriefUpdateComapanyName, "testforaudittrail");
                    userActions.Click(ProgramBriefPage.newBriefUpdateSave);
                    browser.sleep(2000);
                    ProgramBriefPage.newBriefUpdateSaveSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
                    userActions.closeWindowByIndex(1);
                    userActions.switchToWindowByIndex(0);        
                });
            });
        });

        it('Validate whether user is able to send Program Brief customer link successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Draft');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefSendCustomerLink);
            browser.sleep(2000);
            ProgramBriefPage.newBriefUpdateEmailSentSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            
        });

        it('Validate whether user is able to send Program Brief customer link successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Draft');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefSendCustomerLink);
            browser.sleep(2000);
            ProgramBriefPage.newBriefUpdateEmailSentSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            
        });

        it('Validate whether user is able to update account manager info on Program Brief successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Draft');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefUpdateAccountManager);
            ProgramBriefPage.accountManagerDialog.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.accountManagerUpdateBtn);
            browser.sleep(2000);
            ProgramBriefPage.newBriefUpdateAccountManagerSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() }); 
        });

        it('Validate whether user is able to export Program Brief successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Draft');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefExport);
            ProgramBriefPage.newBriefExportProgramBrief.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.newBriefDownload);
            userActions.Click(ProgramBriefPage.newBriefDownloadDone);
            browser.sleep(2000);
            var downloadfile = "testforaudittrail__"+ newBrief +".pdf";
            userActions.verifyFileDownload(downloadfile);
        });

        it('Validate whether user is able to cancel Program Brief successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Draft');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefCancelBrief);
            ProgramBriefPage.newBriefCancelBriefHeader.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            userActions.Click(ProgramBriefPage.newBriefCancelConfirm);
            browser.sleep(2000);
            ProgramBriefPage.newBriefCancelConfirmSuccessMessage.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() }); 
        });

        it('Validate whether user is able to view raw data in Program Brief successfully', () => {
            browser.get(internalProgramBriefpage);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            userActions.Click(ProgramBriefPage.updatedatSort);
            browser.sleep(1000);
            expect(ProgramBriefPage.newBriefStatus.getText()).toEqual('Cancelled');
            expect(ProgramBriefPage.newBriefPageCompanyName.getText()).toEqual('testforaudittrail');
            userActions.Click(ProgramBriefPage.newBriefActions);
            userActions.Click(ProgramBriefPage.newBriefRawAuditTrail);
            ProgramBriefPage.briefRawContent.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
            expect(ProgramBriefPage.briefRawContent.getText()).toContain('testforaudittrail');
            userActions.Click(ProgramBriefPage.briefRawContentClose);
        });

        it('Validate whether user is able to logout from Program Brief successfully', () => {
            commonReusables.Logout();
        });

    });
};

