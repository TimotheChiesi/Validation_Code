describe('Home Page End-to-End Tests', function () {

  before(function (browser) {
    // Navigate to the home page and maximize the window
    return browser
      .navigateTo('http://127.0.0.1:9090') // Adjust URL as per your setup
      .window.maximize();
  });

  after(function (browser) {
    // End the browser session
    browser.end();
  });

  it('should verify the header section', function (browser) {
    browser
      .waitForElementVisible('body', 1000)
      .assert.textContains('h2.display-3.home--header-title', 'A LOUER APPARTEMENT ROSAS')
      .assert.textContains('h2.display-6.text-danger', '2 chambres | 30 m de la plage')
      .assert.visible('a.btn.btn-lg.btn-dark')
      .assert.attributeEquals('a.btn.btn-lg.btn-dark', 'href', 'http://127.0.0.1:9090/contact');
  });

  it('should verify the apartment gallery', function (browser) {
    browser
      .waitForElementVisible('#appartement-gallerie', 1000)
      .elements('css selector', '#appartement-gallerie img', function (result) {
        browser.assert.equal(result.value.length, 6, 'Apartment gallery should contain 6 images');
      });
  });

  it('should verify the characteristics section', function (browser) {
    browser
      .waitForElementVisible('#caracteristiques', 1000)
      .elements('css selector', '#caracteristiques img', function (icons) {
        browser.assert.equal(icons.value.length, 12, 'Should display 12 characteristic icons');
      })
      .elements('css selector', '#caracteristiques span', function (descriptions) {
        browser.assert.equal(descriptions.value.length, 12, 'Should display 12 descriptions');
      })
      .assert.textContains('#caracteristiques', 'Plage à 30m')
      .assert.textContains('#caracteristiques', 'Parking gratuit')
      .assert.textContains('#caracteristiques', 'Restaurants')
      .assert.textContains('#caracteristiques', 'Non fumeur');
  });

  it('should navigate to the contact page when clicking the contact button', function (browser) {
    browser
      .waitForElementVisible('a.btn.btn-lg.btn-dark', 1000)
      .click('a.btn.btn-lg.btn-dark')
      .assert.urlEquals('http://127.0.0.1:9090/contact');
  });

});