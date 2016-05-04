import { expect } from 'chai';
import loadingClass from './loadingClass';

describe('loadingClass', () => {
  context('when loading is true', () => {
    it('returns the block and the modifier class', () => {
      const result = loadingClass(true, 'test-class');

      expect(result).to.equal('test-class test-class--loading');
    });
  });

  context('when loading is false', () => {
    it('only returns the block', () => {
      const result = loadingClass(false, 'test-class');

      expect(result).to.equal('test-class');
    });
  });
});
