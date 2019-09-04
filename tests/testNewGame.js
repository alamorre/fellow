var savedUrl = '';

module.exports = {
  "tags": ["new", "root"],

  /**
   * Test if bad credentials are correctly caught and can be recovered from
   * 1. Try bad email and good password
   * 2. Try good email and bad password
   */
  'Can create a new game URL and share it': function(browser) {
     0;

    browser
      // Go to the origional page
      .url(`http://localhost:8080`)
      .waitForElementVisible('#page-loader', 2000, 'Assert the page starts by loading')
      .pause(5000); // Pause for the redirect

    // Save the game ID from url
    let gameID;
    browser.url(function(result) {
      gameID = result.value.split('/').pop();
    });

    // Assert the grid appears
    browser.perform(done => {
      browser.waitForElementVisible(`#game-grid-${gameID}`, 2000, 'Assert the game grid appears after loader')
      done();
    });

    // Refresh the page
    browser
      .refresh()
      .pause(5000);

    // Save the game ID from url
    browser.url(function(result) {
      gameID = result.value.split('/').pop();
    });

    // Assert the same grid appears
    browser.perform(done => {
      browser.waitForElementVisible(`#game-grid-${gameID}`, 2000, 'Assert the same game grid will re-appear')
      done();
    });
  }
}
