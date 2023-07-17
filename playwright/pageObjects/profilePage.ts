/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-await-in-loop */
import { Locator, Page } from '@playwright/test'

import coinsWithIcons from '@app/constants/coinsWithIcons.json'
import supportedGeneralRecordKeys from '@app/constants/supportedGeneralRecordKeys.json'
import supportedSocialRecordKeys from '@app/constants/supportedSocialRecordKeys.json'

export class ProfilePage {
  readonly page: Page

  readonly getRecreateButton: Locator

  readonly getDeleteSubnameButton: Locator

  readonly getExtendButton: Locator

  readonly editProfileButton: Locator

  readonly profileEditor: Locator

  constructor(page: Page) {
    this.page = page
    this.getRecreateButton = this.page.getByTestId('profile-action-Recreate name')
    this.getDeleteSubnameButton = this.page.locator('text="Delete subname"')
    this.getExtendButton = this.page.getByTestId('extend-button')
    this.editProfileButton = this.page.getByTestId('profile-action-Edit profile')
    this.profileEditor = this.page.getByTestId('profile-editor')
  }

  async goto(name: string) {
    await this.page.goto(`/${name}`)
  }

  async getExpiryTimestamp() {
    const exipryBtn = this.page.getByTestId('owner-profile-button-name.expiry')
    let count = 0
    while (count < 5) {
      const timestamp = parseInt((await exipryBtn.getAttribute('data-timestamp')) || '')
      if (timestamp) return timestamp
      count += 1
      await this.page.waitForTimeout(100)
    }
    return 0
  }

  record(type: 'text' | 'address', key: string): Locator {
    if (type === 'text' && supportedGeneralRecordKeys.includes(key))
      return this.page.getByTestId(`profile-snippet-${key}`)
    if (type === 'text' && supportedSocialRecordKeys.includes(key))
      return this.page.getByTestId(`social-profile-button-${key}`)
    if (type === 'text') return this.page.getByTestId(`other-profile-button-${key}`)
    if (type === 'address' && coinsWithIcons.includes(key.toLowerCase()))
      return this.page.getByTestId(`address-profile-button-${key.toLowerCase()}`)
    if (type === 'address') return this.page.getByTestId(`other-profile-button-${key}`)
    return this.page.getByTestId(`other-profile-button-${key}`)
  }

  async profileEditorAddInputs(keys: string[]) {
    await this.page.getByTestId('show-add-profile-records-modal-button').click()
    for (const key of keys) {
      await this.page.getByTestId(`profile-record-option-${key}`).click()
    }
    await this.page.getByTestId('add-profile-records-button').click()
  }

  profileEditorInput(key: string) {
    if (key === 'description')
      return this.page.getByTestId('profile-record-input-description').locator('textarea')
    return this.page.getByTestId(`profile-record-input-input-${key}`)
  }
}
