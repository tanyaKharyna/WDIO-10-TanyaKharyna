// Use http://93.126.97.71:10082/mp3-players to simplify these tests. Mp3 players does not have custom params on details page.

// bonus points:
// - use preconditions
// - use dataprovider
import * as faker from 'faker';
import pause from 'webdriverio/build/commands/browser/pause';

describe('Items', function () {
     // You must be logged in to use wishlist
     before(function() {
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
      
     })
 //test 1
      let dataCollection = [1, 2, 3, 4];
      dataCollection.map(data => {
          it.only(`item with index No.${data} can be added to wishlist`, function() {
            function addToWishlistByIndex(data) {
               browser.url('/mp3-players');
               const allItems = $('#content div.row:nth-child(8)');
               const compareBtn = allItems.$(`div:nth-child(${data}) [data-original-title="Add to Wish List"]`);
               compareBtn.click()
            } 
               addToWishlistByIndex(data);
   
               const successWishlist = $('//*[@id="product-product"]/div[1]');
               const message = $('//*[@id="product-product"]/div[1]/text()[1]');
               const totalWishlistItems = $('#wishlist-total span');
               const successIcon = $('i[class="fa fa-check-circle"]');
   
               expect(successIcon).toBeDisplayed();
               //expect(successIcon).toHaveTextContaining(' Success: You have added ');
               expect(totalWishlistItems).not.toHaveText('Wish List (0)');
          });
      });
      
//test 2
      dataCollection.map(data => {
         it(`item with index No.${data} can be selected for comparison by registered user`, function() {
            function compareItemsByIndex(data:number) {
               browser.url('/mp3-players');
               const allItems = $('#content div.row:nth-child(8)');
               const compareBtn = allItems.$(`div:nth-child(${data}) [data-original-title="Compare this Product"]`);
               compareBtn.click();
          } 
         compareItemsByIndex(data);

         const successIcon = $('i[class="fa fa-check-circle"]');
         const linkToComparisonPage = $('div.alert.alert-success.alert-dismissible a:nth-child(3)')
         const compareTotal = $('#compare-total');

         expect(successIcon).toBeDisplayed();
         expect(linkToComparisonPage).toHaveText('product comparison');
         expect(compareTotal).not.toHaveTextContaining('Product Compare (0)');
         });
      });
   
 //test 3      
      dataCollection.map(data => {
         it(`item No. ${data} can be added to cart by registered user`, function() {
         
            function addToCartByIndex(data:number) {
               browser.url('/mp3-players');
               const allItems = $('#content div.row:nth-child(8)');
               const cartBtn = allItems.$(`div:nth-child(${data})div.button-group button:nth-child(1)`);
               cartBtn.click();
          } 
         addToCartByIndex(data);
         browser.pause(3000)
         });
   })
     


     it.skip('can be selected for comparison by guest', function () {
        browser.pause(3000)
     })
  
     it.skip('can be added to cart by guest', function () {
  
     })
  
    
  })