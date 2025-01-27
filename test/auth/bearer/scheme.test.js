/* global describe, it, expect */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../../../app/auth/bearer/scheme');
var Strategy = require('passport-http-bearer');


describe('auth/bearer/scheme', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/auth/Scheme');
    expect(factory['@scheme']).to.equal('bearer');
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('creating scheme', function() {
    var StrategySpy = sinon.spy(Strategy);
    var verify = function(){};
    
    var factory = $require('../../../app/auth/bearer/scheme',
      { 'passport-http-bearer': StrategySpy });
    var strategy = factory(verify);
    
    it('should construct strategy', function() {
      expect(StrategySpy).to.have.been.calledOnce;
      expect(StrategySpy).to.have.been.calledWithExactly({ passReqToCallback: true }, verify);
    });
    
    it('should return strategy', function() {
      expect(strategy).to.be.an.instanceOf(Strategy);
    });
  }); // creating scheme
  
});
