describe('Geo Page End-to-End Tests', function () {

    before(async function (browser) {
      // Navigate to the geo page
      await browser.navigateTo('http://127.0.0.1:9090/geo')
      .window.maximize();
    });
  
    after(function (browser) {
      browser.end();
    });
  
    it('should render the header correctly', function (browser) {
      browser
        .waitForElementVisible('header', 5000, 'Header is visible')
        .assert.visible('header img', 'Header image is visible')
        .assert.textContains('header h2', 'IDEALEMENT SITUE', 'Header title is displayed correctly')
        .assert.textContains('header h2.text-danger', '30 mètres de la plage', 'Sub-header text is displayed correctly')
        .assert.visible('header a[href="/contact"]', 'Contact button is visible and clickable');
    });
  
    it('should render the main sections correctly', function (browser) {
      browser
        .waitForElementVisible('main', 5000, 'Main content is visible')
        .assert.visible('main .card-title', 'Main section headers are visible')
        .assert.textContains('main h5.card-title', 'Accès', 'Access section is displayed')
        .assert.visible('main iframe', 'Google Maps iframe is displayed')
        .assert.attributeContains(
          'main iframe',
          'src',
          'https://www.google.com/maps/embed',
          'Google Maps iframe has correct source'
        );
    });

    
  });
  