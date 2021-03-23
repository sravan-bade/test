'use strict';

var OktaPage = require('../po/okta_page.js');
var ProgramBriefPage = require('../po/programBrief_page.js');
var userActions = require('../../../utility/user_actions.js');

var Reusables = function () {
    
    // this.LoginDB = function (userName,password) {
    //     getPwdFromDB.getPwd(function (res) {
    //         if(res==userData.encryptPwd){
    //             userData.superAdminPwd='Y5jWb3#6';
    //             userActions.TypeText(loginPage.userNameTxt,userName);
    //             userActions.TypeText(loginPage.passwordTxt,password);
    //             userActions.Click(loginPage.nxtBtn);
    //             dashboardpage.dashBoard.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
    //         }
    //         else {
    //             console.log(">>>>>"+password+" is a wrong password for the user "+userName);
    //             }
    //         },userName);
    //     };

    this.Login = function (userName,password) {
        OktaPage.oktaUserNameTxt.sendKeys(userName);
        OktaPage.oktaPasswordTxt.sendKeys(password);
        OktaPage.oktaSubmit.click();
        ProgramBriefPage.briefDashboard.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
    };

    // this.BWLogin = function (userName,password) {
    //     bwPage.userIdTxt.sendKeys(userName);
    //     bwPage.bwPwdTxt.sendKeys(password);
    //     bwPage.bwLoginBtn.click();
    // };

    this.Logout = function () {
        userActions.Click(ProgramBriefPage.briefLogoutUserName);
        browser.sleep(3000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(ProgramBriefPage.briefLogoutBtn), 10000);
        userActions.Click(ProgramBriefPage.briefLogoutBtn);
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toContain('https://portal.main0.gcn.dev.use1.vonagenetworks.net/login');
    };

    this.prodInternalLogout = function () {
        userActions.Click(ProgramBriefPage.briefLogoutUserName);
        browser.sleep(3000);
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(ProgramBriefPage.briefLogoutBtn), 10000);
        userActions.Click(ProgramBriefPage.briefLogoutBtn);
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toContain('https://gcn.vonage.com/login');
    };
    // this.LogoutPr = function () {
    //     userActions.Click(logoutPage.logoutBtn);
    //     var EC = protractor.ExpectedConditions;
    //     browser.wait(EC.visibilityOf(logoutPage.logoutYesBtnPr), 5000);
    //     userActions.Click(logoutPage.logoutYesBtnPr);
    //     browser.wait(EC.visibilityOf(loginPage.userNameTxt), 5000);
    //     // expect(browser.getCurrentUrl).toContain('index.php/admin');
    // };

    // this.ChangePasswordSuccess = function (password,cnfPassword) {
    //     userActions.ClearAndType(cngPwdPage.newPwdTxt,password);
    //     userActions.ClearAndType(cngPwdPage.confirmPwdTxt,cnfPassword);
    //     cngPwdPage.saveNewPwdBtn.isEnabled().then(function (enable) { expect(enable).toBeTruthy() });
    //     userActions.Click(cngPwdPage.saveNewPwdBtn);
    //     browser.sleep(50000);
    //     cngPwdPage.cnfrmationPopUp.isDisplayed().then(function (displayed) { expect(displayed).toBeTruthy() });
    //     browser.sleep(5000);
    //     cngPwdPage.cnfrmationPopUp.getText().then(function (text) { expect(text).toContain("Password successfully updated!") });

    // };
    // this.ChangePasswordUnSuccess = function (password,cnfPassword) {
    //     userActions.ClearAndType(cngPwdPage.newPwdTxt,password);
    //     userActions.ClearAndType(cngPwdPage.confirmPwdTxt,cnfPassword);
    //     cngPwdPage.saveNewPwdBtn.isEnabled().then(function (enable) { expect(enable).toBeTruthy() });
    //     userActions.Click(cngPwdPage.saveNewPwdBtn);
    //     cngPwdPage.dangerPopUp.isDisplayed().then(function (displayed) { expect(displayed).toBeTruthy() });
    //     browser.sleep(5000);
    //     cngPwdPage.dangerPopUp.getText().then(function (text) { expect(text).toContain("We were unable to update the password, please check the rules and try again.") });
    //     userActions.Click(cngPwdPage.popUpCloseBtn);
    // };

    // this.CustomerChangePasswordSuccess = function (password,cnfPassword) {
    //     userActions.ClearAndType(custDashboardPage.newPwdTxt,password);
    //     userActions.ClearAndType(custDashboardPage.newPwdConfirmTxt,cnfPassword);
    //     userActions.SelectByIndex(custDashboardPage.secretQ1Dd,2);
    //     userActions.ClearAndType(custDashboardPage.answerQ1Txt,"Dog");
    //     userActions.SelectByIndex(custDashboardPage.secretQ2Dd,2);
    //     userActions.ClearAndType(custDashboardPage.answerQ2Txt,"City");
    //     userActions.Click(custDashboardPage.resetBtn);
    //     custDashboardPage.pwdSuccessMsg.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
    // };
    // this.ResetProvPortalPwd = function (userName) {
    //     userActions.Click(dashboardpage.myProfileDd);
    //     userActions.Click(dashboardpage.chngPwdLnk);
    //     browser.sleep(3000);
    //     userActions.ClearAndType(cngPwdPage.newPwdTxt,proPwd);
    //     cngPwdPage.saveNewPwdBtn.isEnabled().then(function (enable) { expect(enable).toBeTruthy() });
    //     userActions.Click(cngPwdPage.saveNewPwdBtn);
    //     cngPwdPage.cnfrmationPopUp.isDisplayed().then(function (displayed) { expect(displayed).toBeTruthy() });
    //     browser.sleep(5000);
    //     cngPwdPage.cnfrmationPopUp.getText().then(function (text) { expect(text).toContain("Password successfully updated!") });
    // };
   /* this.ResetPremierPortalPwd = function (userName) {
        loginPage.userNameTxt.sendKeys(userName);
        loginPage.passwordTxt.sendKeys(proPwd);
        loginPage.nxtBtn.click();
        dashboardpage.dashBoard.isDisplayed().then(function (enable) { expect(enable).toBeTruthy() });
        userActions.Click(dashboardpage.userDropDown);
        userActions.Click(dashboardpage.chngPasswordLnk);
    };*/
    this.GenerateRandomNum = function () {
        return Math.round(Math.random()*10000);
    };
};

module.exports = new Reusables();