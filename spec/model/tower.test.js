const chai = require('chai');
const expect = chai.expect;
const { Tower } = require('../../model/tower');
const { D6 } = require('../../model/d6');

describe('basic test for tower', () => {
  it('should exist', () => {
    expect(Tower).to.exist;
  });

  it('should have three 0s', () => {
    let tower = new Tower();
    expect(tower.tower).to.be.an('array');
    expect(tower.tower).that.is.empty;
  });

  it('should have one element', () => {
    let tower = new Tower();
    let die = new D6();
    die.roll();
    tower.add(die);
    expect(tower.bottom).to.be.an('object');
    expect(tower.height()).to.equal(1);
  });

  it('hit should remove top element', () => {
    let tower = new Tower();
    tower.add(new D6());
    expect(tower.height()).to.equal(1);

    tower.hit();
    expect(tower.height()).to.equal(0);
  });

  it('should crush the tower completely', () => {
    let tower = new Tower();
    tower.add(new D6());
    tower.add(new D6());
    tower.add(new D6());
    expect(tower.height()).to.equal(3);
    tower.crush();
    expect(tower.height()).to.equal(0);
  });
});
