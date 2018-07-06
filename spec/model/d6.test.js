const chai = require('chai');
const expect = chai.expect;
const { D6 } = require('../../model/d6');

describe('basic testing for a D6', () => {
  it('should exist', () => {
    expect(D6).to.exist;
  });

  it('should have 6 sides', () => {
    let d6 = new D6();
    expect(d6.sides).to.equal(6);
  });

  it('should roll properly', () => {
    let d6 = new D6();
    for (let i = 0; i < 100; i++) {
      d6.roll();
      expect(d6.value()).to.be.within(1, 6);
    }
  });
});
