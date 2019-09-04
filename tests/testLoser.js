import axios from 'axios';
var gameID;

module.exports = {
  "tags": ["lose", 'lost'],

  before: function(browser, done) {
    // Remove foo bar people
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/games/loser/`
    })

    // Remove foo bar people
    .then((r) => {
      gameID = r.data.id;
      done();
    })

    // Error handle clean people
    .catch((e) => { done(); });
  },

  after: function(browser, done) {
    // Remove foo bar people
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/games/clean_tests/`
    })

    // Remove foo bar people
    .then((r) => { done(); })

    // Error handle clean people
    .catch((e) => { done(); });
  },


  /**
   * Test if 404 errors are caught and recovered
   */
  'The board detects when a user lost': function(browser) {
    // Go to the /foo which does not exist
    browser
      .url(`http://localhost:8080/${gameID}`)
      .pause(2500); // Pause for the redirect

    // Assert a new game was made
    browser.perform(done => {
      browser.waitForElementVisible(`#game-lost-icon`, 2000, 'Assert the game was considered lost')
      done();
    });

    // Try clicking an element
    
  }
}
