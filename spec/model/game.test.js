const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const { Game } = require('../../model/game');

describe('basic tests form game', () => {
  context('Obvious stuff', () => {
    it('should exist', () => {
      expect(Game).to.exist;
    });
  });

  context('Game ending', () => {
    let game;

    beforeEach('', () => {
      game = new Game();
    });

    it('should be finished when all towers al filled', () => {
      const mockPlayer1 = { isFinished: sinon.stub().returns(true) };
      const mockPlayer2 = { isFinished: sinon.stub().returns(true) };
      game.addPlayer(mockPlayer1);
      game.addPlayer(mockPlayer2);

      expect(game.isFinished()).to.be.true;
    });
  });
});
