const chai = require('chai');
const expect = chai.expect;
const { Game } = require('../../model/game');

describe('basic tests form game', () => {
  it('should exist', () => {
    expect(Game).to.exist;
  });
});
