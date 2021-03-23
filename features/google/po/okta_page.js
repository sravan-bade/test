var oktaPage = function () {

    this.oktaUserNameTxt = element(by.xpath('//*[@id="okta-signin-username"]'));
    this.oktaPasswordTxt = element(by.xpath('//*[@id="okta-signin-password"]'));
    this.oktaSubmit = element(by.xpath('//*[@id="okta-signin-submit"]'));

};

module.exports = new oktaPage();
