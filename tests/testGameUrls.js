module.exports = {
  "tags": ["new", "root", "share", "url"],

  /**
   * Test if new games can be created and recovered from their URL
   */
  'Can create a new game URL and share its URL': function(browser) {
    // Go to the origional page
    browser
      .url(`http://localhost:8080`)
      .waitForElementVisible('#page-loader', 2000, 'Assert the page starts by loading')
      .pause(3500); // Pause for the redirect

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
      .pause(3500);

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
