describe('Contact Page End-to-End Tests', function () {

  before(async function (browser) {
    // Navigate to the contact page
    await browser.navigateTo('http://127.0.0.1:9090/contact');
  });

  after(function (browser) {
    browser.end();
  });

  it('should render the contact form correctly', function (browser) {
    browser
      .waitForElementVisible('form', 5000, 'Contact form is visible')
      .assert.visible('input[name="firstName"]', 'First name input is visible')
      .assert.visible('input[name="lastName"]', 'Last name input is visible')
      .assert.visible('input[name="mobilePhone"]', 'Mobile phone input is visible')
      .assert.visible('input[name="email"]', 'Email input is visible')
      .assert.visible('input[name="arrivedAt"]', 'Arrival date input is visible')
      .assert.visible('input[name="departureAt"]', 'Departure date input is visible')
      .assert.visible('textarea[name="message"]', 'Message textarea is visible')
      .assert.visible('button[type="submit"]', 'Submit button is visible');
  });

  it('should submit the form successfully', function (browser) {
    browser
      .setValue('input[name="firstName"]', 'Jean')
      .setValue('input[name="lastName"]', 'Louis')
      .setValue('input[name="mobilePhone"]', '0612345678')
      .setValue('input[name="email"]', 'jean.louis@email.com')
      .setValue('input[name="arrivedAt"]', '2025-01-20')
      .setValue('input[name="departureAt"]', '2025-01-25')
      .setValue('textarea[name="message"]', 'Looking forward to visiting!')
      .pause(1000)
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(2000) // Adjust based on backend response time
      .assert.valueEquals('input[name="firstName"]', '', 'First name field is empty')
      .assert.valueEquals('input[name="lastName"]', '', 'Last name field is empty')
      .assert.valueEquals('input[name="email"]', '', 'Email field is empty')
      .assert.valueEquals('input[name="mobilePhone"]', '', 'Mobile phone field is empty')
      .assert.valueEquals('input[name="arrivedAt"]', '', 'Arrived at field is empty')
      .assert.valueEquals('input[name="departureAt"]', '', 'Departure at field is empty')
      .assert.valueEquals('textarea[name="message"]', '', 'Message field is empty')
  });

  it('should not allow form submission with invalid email', function (browser) {
    browser
      .setValue('input[name="firstName"]', 'Jean')
      .setValue('input[name="lastName"]', 'Louis')
      .setValue('input[name="mobilePhone"]', '0612345678')
      .setValue('input[name="email"]', 'invalid-email') // Invalid email
      .setValue('input[name="arrivedAt"]', '2025-01-20')
      .setValue('input[name="departureAt"]', '2025-01-25')
      .setValue('textarea[name="message"]', 'Looking forward to visiting!')
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(2000) // Adjust based on backend response time
      .assert.attributeContains('input[name="email"]', 'validationMessage', "Please include an '@' in the email address. 'invalid-email' is missing an '@'.")
  });

  it('should not allow form submission with no phone number', function (browser) {
    browser
      .setValue('input[name="firstName"]', 'Jean')
      .setValue('input[name="lastName"]', 'Louis')
      .setValue('input[name="mobilePhone"]', '') // Empty phone number
      .setValue('input[name="email"]', 'jean.louis@email.com')
      .setValue('input[name="arrivedAt"]', '2025-01-20')
      .setValue('input[name="departureAt"]', '2025-01-25')
      .setValue('textarea[name="message"]', 'Looking forward to visiting!')
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .click('button[type="submit"]')
      .pause(2000) // Adjust based on backend response time
      .assert.attributeContains('input[name="mobilePhone"]', 'validationMessage', 'Please fill out this field.')
  });
});