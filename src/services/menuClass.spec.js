import { expect } from 'chai';
import menuClass from './menuClass';

describe('menuClass', () => {
  context('when menuOpen is true', () => {
    it('returns the block and the open class', () => {
      const result = menuClass(true, 'test-class');

      expect(result).to.equal('test-class open');
    });
  });

  context('when menuOpen is false', () => {
    it('only returns the block', () => {
      const result = menuClass(false, 'test-class');

      expect(result).to.equal('test-class');
    });
  });
});
