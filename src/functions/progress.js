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