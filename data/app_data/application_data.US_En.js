var userData = require('../run_data/user_data');
var appData = function () {
    this.currentLang = "US_En";
    this.getStartedBtnText = "Get Started";
    this.headlineHeroLogoText1 = "One framework";
    this.headlineHeroLogoText2 = "Mobile and desktop.";
    this.featuresHeader = "Features";
    this.docsHeader = "Docs";
    this.eventsHeader = "Events";
    this.newsHeader = "News";
    this.fileHeader = "none";
};

module.exports = new appData();
