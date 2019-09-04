import axios from 'axios';
var gameID;

module.exports = {
  "tags": ["won", 'win'],

  before: function(browser, done) {
    // Remove foo bar people
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/games/winner/`
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
  'The board detects when a user won': function(browser) {
    // Go to the /foo which does not exist
    browser
      .url(`http://localhost:8080/${gameID}`)
      .pause(2500); // Pause for the redirect

    // Assert a new game was made
    browser.perform(done => {
      browser.waitForElementVisible(`#game-won-${gameID}`, 2000, 'Assert the game was considered won')
      done();
    });
  }
}
