const chai = require('chai');
const expect = chai.expect;
const Player = require('../../model/player');

describe('basic tests for player', () => {
  context('Obvious stuff', () => {
    it('should exist', () => {
      expect(Player).to.exist;
    });
  });

  context('Game ending', () => {
    beforeEach('', () => {
    });

    it('should be finished when all towers al filled', () => {
    });
  });
});
