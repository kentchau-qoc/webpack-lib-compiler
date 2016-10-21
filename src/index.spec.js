import {expect} from 'chai';
import Library from './index.js';

var lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new Library();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('QOC');
    });
  });
});