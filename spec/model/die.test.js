const chai = require('chai');
const expect = chai.expect;
const { Die } = require('../../model/die.js');

describe('basic testing for Die', () => {
  it('should exist', () => {
    expect(Die).to.exist;
  });

  it('should set sides properly', () => {
    let die = new Die();
    expect(die.sides).to.equal(6);

    die = new Die(10);
    expect(die.sides).to.equal(10);
  });

  it('should roll properly', () => {
    let die = new Die();
    for (let i = 0; i < 100; i++) {
      expect(die.roll()).to.be.within(1, 6);
    }
  });
});
