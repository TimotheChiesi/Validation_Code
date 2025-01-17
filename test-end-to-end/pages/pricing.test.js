describe('Pricing Page End-to-End Tests', function () {

    before(async function (browser) {
      // Navigate to the pricing page
      await browser.navigateTo('http://127.0.0.1:9090/pricing')
      .window.maximize(); 
    });
  
    after(function (browser) {
      browser.end();
    });
  
    it('should load the pricing page and check main section', function (browser) {
      browser
        .waitForElementVisible('body', 1000)
        .assert.textContains('.home--header-title', 'UN PRIX POUR')
        .assert.textContains('.home--header-title', 'TOUTES LES SAISONS')
        .assert.textContains('.display-6', 'Venez séjourner à Rosas')
        .assert.textContains('p', 'De 460 € à 760 € / semaine')
        .assert.visible('a.btn.btn-dark.btn-lg.rounded-pill')
    });

    it('should load the pricing page and check pricing section', function (browser) {
      browser
        .waitForElementVisible('body', 1000)
        .useXpath()
        .assert.textContains('/html/body/main/section[1]/div/div[1]/div/div/h5', 'Basse saison')
        .assert.visible('/html/body/main/section[1]/div/div[1]/div/div/div[2]/a', 'Contact button for "Basse saison" is visible and clickable')
        .assert.textContains('/html/body/main/section[1]/div/div[2]/div/div/h5', 'Moyenne saison')
        .assert.visible('/html/body/main/section[1]/div/div[2]/div/div/div[2]/a', 'Contact button for "Moyenne saison" is visible and clickable')
        .assert.textContains('/html/body/main/section[1]/div/div[3]/div/div/h5', 'Haute saison')
        .assert.visible('/html/body/main/section[1]/div/div[3]/div/div/div[2]/a', 'Contact button for "Haute saison" is visible and clickable')
    });
});

