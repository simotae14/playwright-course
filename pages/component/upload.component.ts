import { Page, Locator } from '@playwright/test';

class UploadComponent {
  private page: Page;
  uploadInput: string;
  submitButton: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadInput = 'input#upfile_1';
    this.submitButton = page.locator('#upload_1');
    this.successTxt = page.locator('#wfu_messageblock_header_1_1');
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles(this.uploadInput, filePath);
    await this.submitButton.click();
  }
}

export default UploadComponent;