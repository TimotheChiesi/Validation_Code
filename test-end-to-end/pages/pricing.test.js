describe('Pricing Page End-to-End Tests', function () {

    before(async function (browser) {
      // Navigate to the pricing page
      await browser.navigateTo('http://127.0.0.1:9090/pricing'); // Replace with your actual pricing page URL
    });
  
    after(function (browser) {
      browser.end();
    });
  
    it('should load the pricing page and check sections', function (browser) {
      browser
        .waitForElementVisible('body', 1000)
        .assert.visible('.home--header-title', 'Pricing page is loaded')
        .assert.textContains('.home--header-title', 'UN PRIX POUR TOUTES LES SAISONS', 'Header title is displayed correctly')
        .assert.textContains('.display-6', 'Venez séjourner à Rosas', 'Sub-header text is displayed correctly')
        .assert.visible('a[href="/contact"]', 'Contact button is visible and clickable');
    });
  
    it('should check pricing section', function (browser) {
      browser
        .waitForElementVisible('main', 1000)
        .assert.visible('#tarifs-pricing', 'Pricing section is visible')
        .assert.visible('.card-title', 'Pricing cards are visible')
        .assert.textContains('.card-title', 'Basse saison', 'Basse saison card is present')
        .assert.textContains('.card-text', '460 €', 'Basse saison price is correct');
    });
});