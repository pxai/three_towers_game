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
    return this.isNotCompleted() &&
           this.isTooBigForPosition(die.value) &&
           this.isBiggerThanLast(die.value);
  }

  isNotCompleted () {
    return this.height() !== 3;
  }

  isTooBigForPosition (value) {
    return !(value >= 5 && this.height() < 2);
  }

  isBiggerThanLast (value) {
    return !(this.height() === 0 || this._tower.slice(-1)[0] < value);
  }
}

module.exports = { Tower };
