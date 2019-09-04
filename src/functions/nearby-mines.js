/**
* This function will count the adjacent mines to an index
*/
export function countNearbyMines(block, game) {
  const { index } = block   // Block position on board
  var count = 0             // Number of mines touching [0, 8]

  // 1. Check top left
  if(index > 9 && index % 10 !== 0){
    const topLeft = index - 11
    if(game.blocks[topLeft].is_mine){
      count = count + 1
    }
  }

  // 2. Check top
  if(index > 9){
    const top = index - 10
    if(game.blocks[top].is_mine){
      count = count + 1
    }
  }

  // 3. Check top right
  if(index > 9 && index % 10 !== 9){
    const topRight = index - 9
    if(game.blocks[topRight].is_mine){
      count = count + 1
    }
  }

  // 4. Check left
  if(index % 10 !== 0){
    const left = index - 1
    if(game.blocks[left].is_mine){
      count = count + 1
    }
  }

  // 5. Check left
  if(index % 10 !== 9){
    const right = index + 1
    if(game.blocks[right].is_mine){
      count = count + 1
    }
  }

  // 6. Check bottom left
  if(index < 90 && index % 10 !== 0){
    const bottomLeft = index + 9
    if(game.blocks[bottomLeft].is_mine){
      count = count + 1
    }
  }

  // 7. Check bottom
  if(index < 90){
    const bottom = index + 10
    if(game.blocks[bottom].is_mine){
      count = count + 1
    }
  }

  // 8. Check bottom right
  if(index < 90 && index % 10 !== 9){
    const bottomRight = index + 11
    if(game.blocks[bottomRight].is_mine){
      count = count + 1
    }
  }

  // Return the count (0 to 8)
  return count
}
