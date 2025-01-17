describe('Localisation Page End-to-End Tests', function () {
  before(async function (browser) {
    // Navigate to the localisation page
    await browser
      .navigateTo('http://127.0.0.1:9090/geo') // Adjust the URL based on your setup
      .window.maximize();
  });

  after(function (browser) {
    browser.end();
  });

  it('should verify the header section', function (browser) {
    browser
      .useXpath()
      .waitForElementVisible('/html/body/header', 1000, 'Header is visible')
      .assert.visible('/html/body/header/div[2]/div/div[2]/h2[1]', 'Header title is visible')
      .assert.textContains(
        '/html/body/header/div[2]/div/div[2]/h2[1]',
        'IDEALEMENT SITUE',
        'Header title is correct'
      )
      .assert.textContains(
        '/html/body/header/div[2]/div/div[2]/h2[2]',
        '30 mètres de la plage',
        'Sub-header title is correct'
      )
      .assert.visible('/html/body/header/div[2]/div/div[2]/div/div/a', 'Contact button is visible');
  });

  it('should render the "Voiture" section correctly', function (browser) {
    browser
      .useCss()
      .waitForElementVisible('body', 1000)
      .assert.visible('.col-4 h5.card-title.h4') // Verify "Accès" title
      .assert.elementPresent('i.fa-solid.fa-voiture[aria-hidden="true"]') // Check car icon
      .useXpath() // Switch to XPath selector
      .assert.textContains('/html/body/main/section[1]/div[1]/div[1]/div[1]/h5', 'Voiture') // Verify "Voiture" text
      .useCss()
      .assert.visible('.list-group-item', 'Paris → Rosas') // Verify first travel option
      .assert.visible('.list-group-item', 'Toulouse → Rosas') // Verify second travel option
  });

  it('should render the "Avion" section correctly', function (browser) {
    browser
      .useCss()
      .waitForElementVisible('body', 1000)
      .assert.visible('.col-4 h5.card-title.h4') // Verify "Accès" title
      .useXpath() // Switch to XPath selector
      .assert.elementPresent('/html/body/main/section[1]/div[1]/div[2]/div[1]/h5/i') // Check plane icon
      .assert.textContains('/html/body/main/section[1]/div[1]/div[2]/div[1]/h5', 'Avion') // Verify "Avion" text
      .useCss()
      .assert.visible('.list-group-item', 'Paris → Barcelone') // Verify first travel option
  });

  it('should render the "Train" section correctly', function (browser) {
    browser
      .useCss()
      .waitForElementVisible('body', 1000)
      .assert.visible('.col-4 h5.card-title.h4') // Verify "Accès" title
      .useXpath() // Switch to XPath selector
      .assert.elementPresent('/html/body/main/section[1]/div[1]/div[3]/div[1]/h5/i') // Check train icon
      .assert.textContains('/html/body/main/section[1]/div[1]/div[3]/div[1]/h5', 'Train') // Verify "Train" text
      .useCss()
      .assert.visible('.list-group-item', 'Paris → Barcelone') // Verify first travel option
  });

  it('should verify the "Carte" section', function (browser) {
    browser
      .useXpath()
      .waitForElementVisible('/html/body/main/section/div[1]/div[2]', 1000, 'Map section is visible')
      .assert.visible(
        '/html/body/main/section[1]/div[2]/div/div/iframe',
        'Google Maps iframe is visible'
      );
  });

  it('should verify the "A proximité" section', function (browser) {
    browser
      .assert.visible('/html/body/main/section[2]/div', '"A proximité" section is visible')
      .assert.textContains(
        '/html/body/main/section[2]/div/p[1]',
        'Situé sur la promenade qui longe la mer',
        '"A proximité" description is correct'
      );
  });

  it('should verify the "Nos meilleures adresses" section', function (browser) {
    browser
      .assert.visible('/html/body/main/section[2]/div[2]/div[1]/ol', 'Best addresses list 1 is visible')
      .assert.visible('/html/body/main/section[2]/div[2]/div[2]/ol', 'Best addresses list 2 is visible')
      .assert.textContains(
        '/html/body/main/section[2]/div[2]/div[1]/ol/li[1]',
        'Restaurant Rosa',
        'First item in best addresses list 1 is correct'
      )
      .assert.textContains(
        '/html/body/main/section[2]/div[2]/div[1]/ol/li[2]',
        'Jamoneria Jamon 100 %',
        'Second item in best addresses list 1 is correct'
      )
      .assert.textContains(
        '/html/body/main/section[2]/div[2]/div[1]/ol/li[3]',
        "Sidreria Toxt's",
        'Third item in best addresses list 1 is correct'
      )
      .assert.textContains(
        '/html/body/main/section[2]/div[2]/div[2]/ol/li[1]',
        'Restaurant Las Palmeras',
        'First item in best addresses list 2 is correct'
      ).assert.textContains(
        '/html/body/main/section[2]/div[2]/div[2]/ol/li[2]',
        'A emporter : El rey del pollo',
        'Second item in best addresses list 2 is correct'
      )
      .assert.textContains(
        '/html/body/main/section[2]/div[2]/div[2]/ol/li[3]',
        "Restaurant Pica Pica",
        'Third item in best addresses list 2 is correct'
      );
  });
});
