var savedUrl = '';

module.exports = {
  "tags": ["404", "error", "url", "new"],

  /**
   * Test if 404 errors are caught and recovered
   */
  'Can create a new game URL and share its URL': function(browser) {
    // Go to the /foo which does not exist
    browser
      .url(`http://localhost:8080/foo`)
      .waitForElementVisible('#page-loader', 2000, 'Assert the page starts by loading')
      .pause(3500); // Pause for the redirect

    // Save the new dealID in URL
    let gameID;
    browser.url(function(result) {
      gameID = result.value.split('/').pop();
    });

    // Assert a new game was made
    browser.perform(done => {
      browser.waitForElementVisible(`#game-grid-${gameID}`, 2000, 'Assert a new game was made')
      done();
    });

    // Assert a 404 warning was made
    browser.waitForElementVisible('.ant-notification-notice', 3500, 'Assert a 404 warning was made')
  }
}
