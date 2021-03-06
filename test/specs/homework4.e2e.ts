// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider
import * as faker from 'faker';

describe('Items', function () {
     // You must be logged in to use wishlist
     beforeEach(function() {
      browser.url('/index.php?route=account/login');
      browser.setWindowSize(1920, 1080);
      const content = $('#content');

      const signupBtn = content.$('=Continue');
      signupBtn.click();

      const firstName = content.$('#input-firstname');
      firstName.setValue(faker.name.firstName());

      const lastName = content.$('#input-lastname');
      lastName.setValue(faker.name.lastName());

      const email = content.$('#input-email');
      email.setValue(faker.internet.email());

      const phone = content.$('#input-telephone');
      phone.setValue(faker.phone.phoneNumber());

      const passwordStr = faker.internet.password();
      const password = content.$('#input-password');
      const passwordConfirm = content.$('#input-confirm')
      password.setValue(passwordStr);
      passwordConfirm.setValue(passwordStr);

      const agree = content.$('[name="agree"]');
      agree.click();

      const continueButton = content.$('[value="Continue"]');
      continueButton.click();
      browser.setWindowSize(1920, 1080)
      browser.url('/mp3-players');
     })
      
      it.skip('can be added to wishlist', function () {
         function addToWishlistByIndex(index: number) {
            const allItems = $('#content div.row:nth-child(8)');
            const compareBtn = allItems.$(`div:nth-child(${index}) [data-original-title="Add to Wish List"]`);
            compareBtn.click()
         } 
            addToWishlistByIndex(3);

            const successWishlist = $('//*[@id="product-product"]/div[1]');
            const message = $('//*[@id="product-product"]/div[1]/text()[1]');
            const totalWishlistItems = $('#wishlist-total span');
            const successIcon = $('i[class="fa fa-check-circle"]');

            expect(successIcon).toBeDisplayed();
            expect(successIcon).toHaveTextContaining(' Success: You have added ');
            expect(totalWishlistItems).not.toHaveText('Wish List (0)');
      })
  
     it.only('can be selected for comparison by registered user', function () {
      function compareItemsByIndex(index: number) {
         const allItems = $('#content div.row:nth-child(8)');
         const compareBtn = allItems.$(`div:nth-child(${index}) [data-original-title="Compare this Product"]`);
         compareBtn.click()
      } 
      compareItemsByIndex(3);

      const successIcon = $('i[class="fa fa-check-circle"]');
      const linkToComparisonPage = $('div.alert.alert-success.alert-dismissible a:nth-child(3)')
      
      expect(successIcon).toBeDisplayed();
      expect(successIcon).toHaveTextContaining('Success: You have added ');
      expect(linkToComparisonPage).toHaveText('product comparison');
     })
  
     it.skip('can be selected for comparison by guest', function () {
        browser.pause(3000)
     })
  
     it.skip('can be added to cart by guest', function () {
  
     })
  
     it.skip('can be added to cart by registered user', function () {
  
     })
  })