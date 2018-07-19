const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
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

  it('should not be able to add on finished', () => {
    let tower = new Tower();
    tower.add(new D6());
    tower.add(new D6());
    tower.add(new D6());

    expect(tower.canYouAdd(new D6())).to.be.false;
  });

  it('should not be possible to add 5 or 6 at the beginning', () => {
    let tower = new Tower();
    let mockDie = { value: sinon.stub().returns(6) };

    expect(tower.canYouAdd(mockDie)).to.be.false;
  });

  it('should detect if new die is bigger or equal than tower top', () => {
    let tower = new Tower();
    let mockFirstDie = { value: sinon.stub().returns(4) };
    let mockDie = { value: sinon.stub().returns(6) };

    tower.add(mockFirstDie);

    expect(tower.isBiggerThanLast(mockDie.value())).to.be.true;

    tower = new Tower();
    let realDie = new D6();
    realDie.roll();

    tower.add(realDie);

    expect(tower.isBiggerThanLast(realDie.value())).to.be.true;
  });

  it.skip('should not allow to add incorrect smaller or equal', () => {
  });
});
