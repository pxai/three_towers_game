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
}

module.exports = { Tower };
