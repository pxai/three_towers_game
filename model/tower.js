class Tower {
  constructor () {
    this._tower = [];
  }

  get tower () {
    return this._tower;
  }

  add (die) {
    this._tower.push(die);
  }

  height () {
    return this._tower.length;
  }

  hit () {
    this._tower.pop();
  }

  crush () {
    this._tower = [];
  }

  get bottom () {
    return this._tower[0];
  }

  get middle () {
    return this._tower[1];
  }

  get top () {
    return this._tower[2];
  }

  canYouAdd (die) {
    if (this.isNotCompleted()) {
      return false;
    } else {
      return true;
    }
  }

  isNotCompleted () {
    return this.height() === 3;
  }

  isBiggerThanLast (value) {
    return this.height() === 0 || this._tower.slice(-1)[0] < value;
  }
}

module.exports = { Tower };
