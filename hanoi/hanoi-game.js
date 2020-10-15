class HanoiGame {
  constructor(towers = [[3, 2, 1], [], []]) {
    this.towers = towers;
    }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.towers[endTowerIdx] === undefined) {
      return false;
    }
    if (this.towers[startTowerIdx][0] === this.towers[endTowerIdx][0]) {
      return false;
    }
    if (this.towers[startTowerIdx].length === 0) {
      return false;
    }
        if (this.towers[endTowerIdx].length === 0) {
      return true;
    }
        if (this.towers[startTowerIdx][0] < this.towers[endTowerIdx][0]) {
      return true;
    }
    
  }

  move(startTowerIdx, endTowerIdx) {}

  isWon() {}

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", (start) => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", (end) => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
}

module.exports = HanoiGame;
