var ProgramBriefPage = function () {

    this.closeBriefPopup = element(by.xpath("//span[contains(text(),'Close')]"));
    this.companyName = element(by.xpath("//input[@id='mat-input-6']"));
    this.submitBtn = element(by.xpath("//div[@class='ng-star-inserted']//span[@class='mat-button-wrapper'][contains(text(),'Submit')]"));
    this.nextButton = element(by.xpath("//div[@id='cdk-step-content-0-0']//span[@class='mat-button-wrapper'][contains(text(),'Next')]"))
    this.contactFirstNameProd = element(by.xpath("//input[@id='mat-input-7']"));
    this.contactLastNameProd = element(by.xpath("//input[@id='mat-input-8']"));
    this.programBriefSuccessMsg = element(by.xpath("//span[contains(text(),'Program Brief draft successfully saved.')]"));

    this.briefDashboard = element(by.xpath("/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav/div/div/span"));

    this.briefCommentButton = element(by.xpath('//*[@id="cdk-step-content-0-0"]/div/gcn-program-brief-form/form/mat-form-field[1]/div/div[1]/div[2]/gcn-comment-button/button/span/mat-icon'));
    this.briefCommentSectionText = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-program-brief-review[1]/div[1]/div[1]/gcn-review-brief-comments[1]/div[1]/mat-form-field[1]/div[1]/div[1]/div[1]/textarea'));
    this.briefCommentSectionSubmit = element(by.xpath('/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav-content/div[2]/gcn-program-brief-review/div[1]/div/gcn-review-brief-comments/div/button/span'));
    this.oldBriefCommentValidation = element(by.xpath("//p[contains(text(),'Old Comment')]"));

    this.briefCommentEditButton = element(by.xpath("//mat-icon[contains(text(),'edit')]"));
    
    this.briefCommentEditText = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-program-brief-review[1]/div[1]/div[1]/gcn-review-brief-comments[1]/gcn-comment-card[1]/mat-card[1]/mat-card-content[1]/mat-form-field[1]/div[1]/div[1]/div[1]/textarea"));
    this.briefCommentEditTextConfirm = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-program-brief-review[1]/div[1]/div[1]/gcn-review-brief-comments[1]/gcn-comment-card[1]/mat-card[1]/mat-card-actions[1]/button[2]/span[1]"));
    this.newBriefCommentValidation = element(by.xpath("//p[contains(text(),'New Comment')]"));

    this.briefCommentSectionText_dev = element(by.xpath('/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav-content/div[2]/gcn-program-brief-review/div[1]/div/gcn-review-brief-comments/div/mat-form-field/div/div[1]/div/textarea'));
    this.briefCommentEditText_dev = element(by.xpath("/html[1]/body[1]/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-program-brief-review[1]/div[1]/div[2]/gcn-review-brief-comments[1]/gcn-comment-card[1]/mat-card[1]/mat-card-content[1]/mat-form-field[1]/div[1]/div[1]/div[1]/textarea[1]"));
    this.briefCommentEditTextConfirm_dev = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-program-brief-review[1]/div[1]/div[2]/gcn-review-brief-comments[1]/gcn-comment-card[1]/mat-card[1]/mat-card-actions[1]/button[2]/span[1]"));
    
    this.briefCommentDelete = element(by.xpath("//mat-icon[contains(text(),'delete')]"));
    this.briefCommentDeleteConfirm = element(by.xpath("//span[contains(text(),'Delete')]"));
    
    this.briefLogoutUserName = element(by.xpath("//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[1]/button[1]/span[1]"));
    this.briefLogoutBtn = element(by.xpath("//body/div[2]/div[2]/div[1]/div[1]/div[1]/button[1]"));

    this.programInformation = element(by.xpath('//*[@id="cdk-step-label-0-2"]'));
    this.smsTandC = element(by.xpath('//*[@id="mat-input-26"]'));
    this.smsTandCButton = element(by.xpath('//*[@id="cdk-step-content-0-2"]/div/gcn-program-info-form/form/mat-form-field[3]/div/div[1]/div[2]/gcn-upload-button/button'));
    this.uploadedFile = element(by.xpath('//*[@id="file-label"]'));
    this.uploadFileDelete = element(by.xpath('//*[@id="cdk-step-content-0-2"]/div/gcn-program-info-form/form/gcn-attachment-list[2]/mat-card/mat-card-content/ul/li/button/span/mat-icon'));
    this.newBrief = element(by.xpath('/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav/div/mat-nav-list/mat-nav-list/div/mat-list-item[1]/div'));
    this.companyName = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[1]/div[1]/div[1]/div[1]/input'));
    this.contactFirstName = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[2]/div[1]/div[1]/div[1]/input'));
    this.contactLastName = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[3]/div[1]/div[1]/div[1]/input'));
    this.contactEmail = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[4]/div[1]/div[1]/div[1]/input'));
    this.accManagerFirstName = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[5]/div[1]/div[1]/div[1]/input'));
    this.accManagerLastName = element(by.xpath('/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav-content/div[2]/gcn-new/form/mat-form-field[6]/div/div[1]/div/input'));
    this.accManagerEmail = element(by.xpath('//body/gcn-root[1]/gcn-home[1]/main[1]/mat-sidenav-container[1]/mat-sidenav-content[1]/div[2]/gcn-new[1]/form[1]/mat-form-field[7]/div[1]/div[1]/div[1]/input'));
    this.briefSubmit = element(by.xpath("//span[contains(text(),'Submit')]"));
    this.briefNewSuccessMsg = element(by.xpath("//span[contains(text(),'Program brief was successfully created and sent to')]"));;

    this.updatedatSort = element(by.xpath("/html/body/gcn-root/gcn-home/main/mat-sidenav-container/mat-sidenav-content/div[2]/gcn-program-brief-list/table/thead/tr/th[4]/div/button"));
    this.newBriefPageCompanyName = element(by.xpath("//tr[1]/td[1]"));
    this.newBriefStatus = element(by.xpath("//tr[1]/td[2]"));
    this.newBriefActions = element(by.xpath("//tbody/tr[1]/td[5]/button[1]"));
    this.newBriefView = element(by.xpath("//span[contains(text(),'View')]"));
    this.newBriefSendCustomerLink = element(by.xpath("//span[contains(text(),'Send customer link')]"));
    this.newBriefUpdateAccountManager = element(by.xpath("//span[contains(text(),'Update Account Manager')]"));
    this.newBriefExport = element(by.xpath("//span[contains(text(),'Export')]"));
    this.newBriefCancelBrief = element(by.xpath("//span[contains(text(),'Cancel Brief')]"));
    this.newBriefRawAuditTrail = element(by.xpath("//span[contains(text(),'Raw Audit Trail')]"));
    this.newBriefReview = element(by.xpath("//span[contains(text(),'Review')]"));

    this.newBriefUpdateComapanyName = element(by.xpath('//*[@id="cdk-step-content-0-0"]/div/gcn-program-brief-form/form/mat-form-field[1]/div/div[1]/div[1]/input'));
    this.newBriefUpdateSave = element(by.xpath("//span[contains(text(),'Save')]"));
    this.newBriefUpdateSaveSuccessMessage = element(by.xpath("//span[contains(text(),'Program Brief draft successfully saved.')]"));

    this.newBriefUpdateEmailSentSuccessMessage = element(by.xpath("//span[contains(text(),'New Program Brief email sent to testforaudittrail.')]"));
    this.newBriefUpdateProdInternalEmailSentSuccessMessage = element(by.xpath("//span[contains(text(),'New Program Brief email sent to testforinternaltestcases.')]"));

    this.accountManagerDialog = element(by.xpath("//body/div[2]/div[2]/div[1]/mat-dialog-container[1]/gcn-update-acct-manager-dialog[1]/h1"));
    this.accountManagerUpdateBtn = element(by.xpath("//span[contains(text(),'Update')]"));
    this.newBriefUpdateAccountManagerSuccessMessage = element(by.xpath("//span[contains(text(),'Account manager updated successfully.')]"));

    this.newBriefExportProgramBrief = element(by.xpath('//body/div[2]/div[2]/div//gcn-export-brief-dialog/h1'));
    this.newBriefDownload = element(by.xpath("//span[contains(text(),'Download Brief PDF')]"));
    this.newBriefDownloadDone = element(by.xpath("//span[contains(text(),'Done')]"));
    
    this.briefRawContent = element(by.xpath("//body/div[2]/div[2]/div[1]/mat-dialog-container[1]/mat-dialog-content[1]/pre"));
    this.briefRawContentClose = element(by.xpath("//span[contains(text(),'Close')]"));

    this.newBriefCancelBriefHeader = element(by.xpath("//body/div[2]/div[2]/div[1]/mat-dialog-container//h1"));
    this.newBriefCancelConfirm = element(by.xpath("//span[contains(text(),'Confirm')]"));
    this.newBriefCancelConfirmSuccessMessage = element(by.xpath("//span[contains(text(),'Status updated successfully.')]"));
  
    this.clickActionsForBriefWithCompanyName = function(BriefName){
        actionForBrief1(BriefName);
      };
    
      function actionForBrief1(BriefName)
        {
          element.all(by.css('.cdk-table')).all(by.css('.cdk-row')).count().then(function(rowCount){
            for(var i=1;i<=parseInt(rowCount);i++){
                actionForBrief2(BriefName, i);
            }
          })
        };
        
        function actionForBrief2(BriefName, i)
        {
          element(by.xpath('//tbody/tr[' + i + ']/td[1]')).getText().then(function(retrievedValue){
            if(retrievedValue === BriefName){
              expect(retrievedValue).toBe(BriefName);
              expect(element(by.xpath('//tbody/tr['+i+']//td[1]')).getText()).toEqual(BriefName);
              //expect(element(by.xpath('//tbody/tr['+i+']//td[2]')).getText()).toEqual('New');
              //expect(element(by.xpath('//tbody/tr['+i+']//td[3]')).getText()).toEqual('10/22/20, 8:43 PM');
              //expect(element(by.xpath('//tbody/tr['+i+']//td[4]')).getText()).toEqual('10/22/20, 8:43 PM');
              element(by.xpath('//tbody/tr[' +i +']/td[5]/button[1]')).click();
            }
          })
        };

};

module.exports = new ProgramBriefPage();