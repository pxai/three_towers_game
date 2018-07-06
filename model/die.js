
class Die {
  constructor (sides = 6) {
    this._sides = sides;
    this._value = 0;
  }

  get sides () {
    return this._sides;
  }

  roll () {
    this._value = Math.round((Math.random() * (this._sides - 1)) + 1);
  }

  value () {
    return this._value;
  }
}

module.exports = { Die };
