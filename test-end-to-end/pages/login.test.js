describe('Login Page End-to-End Tests', function () {

    before(async function (browser) {
      // Navigate to the contact page
      await browser.navigateTo('http://127.0.0.1:9090/login')
      .window.maximize(); 
    });
  
    after(function (browser) {
      browser.end();
    });

    it('should load the login page and display the form', function (browser) {
      browser
        .waitForElementVisible('body', 1000, 'Login page is loaded')
        .assert.visible('form', 'Login form is visible')
        .assert.visible('input[name="name"]', 'Name input is visible')
        .assert.visible('input[name="password"]', 'Password input is visible')
        .assert.visible('button[type="submit"]', 'Submit button is visible');
    });
  
    it('should not allow form submission with no name', function (browser) {
      browser
      .setValue('input[name="name"]', '') // No name
      .setValue('input[name="password"]', 'toto123')
        .execute(function() {
          document.querySelector('button[type="submit"]').scrollIntoView();
        })
        .click('button[type="submit"]')
        .pause(2000) // Adjust based on backend response time
        .assert.attributeContains('input[name="name"]', 'validationMessage', 'Please fill out this field.')
    });
  
    it('should not allow form submission with no password', function (browser) {
      browser
        .setValue('input[name="name"]', 'UserAdmin')
        .setValue('input[name="password"]', '') // No password
        .execute(function() {
          document.querySelector('button[type="submit"]').scrollIntoView();
        })
        .click('button[type="submit"]')
        .pause(2000) // Adjust based on backend response time
        .assert.attributeContains('input[name="password"]', 'validationMessage', 'Please fill out this field.')
    });

    it('should submit the form with valid credentials and navigate to /admin', function (browser) {
      browser
        .setValue('input[name="name"]', 'UserAdmin')
        .setValue('input[name="password"]', 'toto123')
        .click('button[type="submit"]')
        .pause(2000) // Allow time for the navigation
        .assert.urlEquals('http://127.0.0.1:9090/admin');
    });
  });