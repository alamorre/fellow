import axios from 'axios';
var gameID;

module.exports = {
  "tags": ["flip", 'sweep', 'throttle', 'loading'],

  before: function(browser, done) {
    // Remove foo bar people
    axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/games/big_sweep/`
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
  'Flip a block and sweep the board': function(browser) {
    // Go to the /foo which does not exist
    browser
      .url(`http://localhost:8080/${gameID}`)
      .pause(2500); // Pause for the redirect

    // Assert a new game was made
    browser
      .click('.block-1')
      .click('.block-99')
      .waitForElementVisible('.ant-notification-notice', 5000, 'The game stops flipping another block');
  }
}
