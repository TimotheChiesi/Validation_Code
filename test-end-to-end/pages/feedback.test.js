describe('Feedback Page End-to-End Tests', function () {
  
  before(async function (browser) {
    // Navigate to the feedback page
    await browser.navigateTo('http://127.0.0.1:9090/feedback')
    .window.maximize();
  });

  after(function (browser) {
    browser.end();
  });

  it('should render the feedback form', function (browser) {
    browser
      .waitForElementVisible('form', 5000, 'Feedback form is visible')
      .assert.visible('input[name="name"]', 'Name input is visible')
      .assert.visible('textarea[name="message"]', 'Message textarea is visible')
      .assert.visible('button[type="submit"]', 'Submit button is visible');
  });

  it('should submit a feedback form successfully', function (browser) {
    browser
      .setValue('input[name="name"]', 'Test User')
      .setValue('textarea[name="message"]', 'This is a test feedback.')
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .waitForElementVisible('button[type="submit"]', 1000)
      .moveToElement('button[type="submit"]', 10, 10)
      .click('button[type="submit"]')
      .pause(2000) // Adjust this based on your backend response time
      .assert.textContains('body', 'Test User', 'New feedback by Test User is displayed')
      .assert.textContains('body', 'This is a test feedback.', 'Feedback message is displayed');
  });

  it('should not allow form submission with no name', function (browser) {
    browser
      .setValue('input[name="name"]', '')
      .execute(function() {
        document.querySelector('button[type="submit"]').scrollIntoView();
      })
      .waitForElementVisible('button[type="submit"]', 1000)
      .moveToElement('button[type="submit"]', 10, 10)
      .click('button[type="submit"]')
      .pause(2000) // Adjust based on backend response time
      .assert.attributeContains('input[name="name"]', 'validationMessage', "Please fill out this field.");
  });
});