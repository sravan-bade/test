var ShortCodePage = function () {

  this.inventory = element(by.xpath("//mat-icon[contains(text(),'receipt')]"));
  this.addShortCode = element(by.xpath("//span[contains(text(),'Add Short Code')]"));
  this.dedicatedShortCode = element(by.xpath("//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]"));
  this.shortCodeNumberProvisioned = element(by.xpath("//input[@id='mat-input-31']"));
  this.region = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]"));
  this.usRegion = element(by.xpath("//span[contains(text(),'US')]"));
  this.shortCodeStatus = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[4]/div[1]/div[1]/div[1]"));
  this.inprogressShortCodeStatus = element(by.xpath("//span[contains(text(),'In Progress')]"));
  this.typeOfCode = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[5]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]"));
  this.randomTypeOfCode = element(by.xpath("//span[contains(text(),'Random')]"));
  this.features = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[6]/div[1]/div[1]/div[1]/mat-select[1]/div[1]/div[1]/span[1]"));
  this.smsFeature = element(by.xpath("//body/div[2]/div[2]/div[1]/div[1]/div[1]/mat-option[1]/span[1]"));
  this.customerName = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[7]/div[1]/div[1]/div[1]/input"));
  this.customerNameEdit = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-edit-short-code[1]/gcn-dedicated-short-code-form[1]/form[1]/div[1]/div[1]/mat-form-field[7]/div[1]/div[1]/div[1]/input"));
  this.currentAggregator = element(by.xpath("//mat-select[@id='mat-select-11']"));
  this.mGageCurrentAggregator = element(by.xpath("//span[contains(text(),'mGage')]"));
  this.apiKey = element(by.xpath("//input[@id='mat-input-34']"));
  this.vonageLeased = element(by.xpath("//mat-select[@id='mat-select-12']"));
  this.yesVonageLeased = element(by.xpath("//span[contains(text(),'Yes')]"));
  this.carrier = element(by.xpath("//input[@id='mat-input-46']"));
  this.verizonCarrier = element(by.xpath("//span[contains(text(),'310004 - Verizon')]"));
  this.provisioningStatus = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-add-short-code[1]/div[1]/mat-card[1]/gcn-short-code-provisioned-carriers[1]/div[1]/mat-form-field[2]/div[1]/div[1]/div[1]/mat-select[1]/div[1]"));
  this.processingProvisioningStatus = element(by.xpath("//span[contains(text(),'Processing')]"));
  this.submitShortCode = element(by.xpath("//span[contains(text(),'Submit')]"));
  this.successfullyCreatedShortCode = element(by.xpath("//span[contains(text(),'Short code added.')]"));

  this.shortCodeSearch = element(by.xpath("//input[@id='mat-input-0']"));
  this.shortCodeActions = element(by.xpath("//mat-icon[contains(text(),'more_horiz')]"));
  this.shortCodeEdit = element(by.xpath("//span[contains(text(),'Edit')]"));
};

module.exports = new ShortCodePage();
