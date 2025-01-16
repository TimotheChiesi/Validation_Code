module.exports = {
  '@tags': ['home'],

  'Verify Header Section': function (browser) {
    browser
      .url('http://127.0.0.1:9090') // Adjust URL as per your local setup
      .waitForElementVisible('body', 1000)
      .assert.containsText('h2.display-3.home--header-title', 'A LOUER APPARTEMENT ROSAS')
      .assert.containsText('h2.display-6.text-danger', '2 chambres | 30 m de la plage')
      .assert.visible('a.btn.btn-lg.btn-dark')
      .assert.attributeEquals('a.btn.btn-lg.btn-dark', 'href', 'http://127.0.0.1:9090/contact')
      .end();
  },

  'Verify Apartment Gallery': function (browser) {
    browser
      .url('http://127.0.0.1:9090')
      .waitForElementVisible('#appartement-gallerie', 1000)
      .elements('css selector', '#appartement-gallerie img', function (result) {
        browser.assert.equal(result.value.length, 6, 'Apartment gallery should contain 6 images');
      })
      .end();
  },

  'Verify Characteristics Section': function (browser) {
    browser
      .url('http://127.0.0.1:9090')
      .waitForElementVisible('#caracteristiques', 1000)
      .elements('css selector', '#caracteristiques img', function (icons) {
        browser.assert.equal(icons.value.length, 12, 'Should display 12 characteristic icons');
      })
      .elements('css selector', '#caracteristiques span', function (descriptions) {
        browser.assert.equal(descriptions.value.length, 12, 'Should display 12 descriptions');
      })
      .assert.containsText('#caracteristiques', 'Plage à 30m')
      .assert.containsText('#caracteristiques', 'Parking gratuit')
      .assert.containsText('#caracteristiques', 'Restaurants')
      .assert.containsText('#caracteristiques', 'Non fumeur')
      .end();
  },

  'Verify Contact Navigation': function (browser) {
    browser
      .url('http://127.0.0.1:9090')
      .waitForElementVisible('a.btn.btn-lg.btn-dark', 1000)
      .click('a.btn.btn-lg.btn-dark')
      .assert.urlEquals('http://127.0.0.1:9090/contact') // Adjust URL based on your setup
      .end();
  }
};
