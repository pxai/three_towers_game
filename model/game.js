class Game {
  constructor (players = []) {
    this._players = players;
  }

  addPlayer (player) {
    this._players.push(player);
  }

  isFinished () {
    const players = this._players.filter(player => player.isFinished());
    return players.length > 0;
  }
}

module.exports = { Game };
