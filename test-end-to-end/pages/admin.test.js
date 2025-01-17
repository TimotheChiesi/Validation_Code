describe('Admin Page Tests', function () {

    before(async function (browser) {
        // Navigate to the contact page
        await browser.navigateTo('http://127.0.0.1:9090/login')
        .window.maximize()
        .setValue('input[name="name"]', 'UserAdmin')
        .setValue('input[name="password"]', 'toto123')
        .click('button[type="submit"]')
        .pause(2000); // Allow time for the navigation
    });

    after(function (browser) {
        browser.end();
    });
  
    it('should load the admin page when authorized', function (browser) {
      browser
        .waitForElementVisible('body', 3000)
        .assert.visible('#navbarTogglerDemo03 > ul > li > button', 'Submit button is visible')
        .assert.visible('table', 'Messages table is visible');
    });
  
    it('should log out and redirect to the login page', function (browser) {
      browser
        .click('.disconnected') // Click the logout button
        .waitForElementVisible('form', 3000)
        .url((result) => {
          browser.assert.ok(result.value.endsWith('/login'), 'Redirected to the login page after logout');
        });
    });
  
    after(function (browser) {
      browser.end();
    });
  });
  