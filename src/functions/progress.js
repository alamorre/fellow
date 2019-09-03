/**
* This function counts the number of mines left
*/
export function countMinesLeft(game){
  // Start the count at 12 (default)
  var count = 12
  const allBlocks = game.blocks ? game.blocks : []

  // Check if any of the mines have been flipped
  allBlocks.map(block => {
    if(block.is_flagged){
      count = count - 1
    }
  })

  // Return results
  return count
}

/**
* This function checks if the user has lost
*/
export function hasLost(game){
  // Start off as safe
  var hasLost = false
  const allBlocks = game.blocks ? game.blocks : []

  // Check if any of the mines have been flipped
  allBlocks.map(block => {
    if(block.is_flipped && block.is_mine){
      hasLost = true
    }
  })

  // Return results
  return hasLost
}

/**
* This function checks if the user has won
*/
export function hasWon(game){
  // Start off as won
  var hasWon = true
  const allBlocks = game.blocks ? game.blocks : []

  // Find any exception to detemine the user has not won
  allBlocks.map(block => {
    if(block.is_mine && !block.is_flagged){
      hasWon = false
    }
    if(!block.is_mine && !block.is_flipped){
      hasWon = false
    }
  })

  // Return results
  return hasWon
}
