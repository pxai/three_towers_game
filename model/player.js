const { Tower } = require('./tower');

class Player {
  constructor () {
    this._towers = [new Tower(), new Tower(), new Tower()];
  }

  isFinished () {
    const towers = this._towers.filter(tower => tower.isFinished());
    return towers.length > 0;
  }
}

module.exports = Player;
