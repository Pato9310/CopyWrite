const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../index');

const agent = supertest(app);

describe('Route testing', () => {
  describe('GET /iecho?text', () => {
    it('responde con 400 en caso de parametros invalidos', () => {
      return agent.get('/api/iecho?text')
        .expect('content-type', 'application/json; charset=utf-8')
        .expect(400);
    });
  });
  describe('GET /iecho?text=test', () => {
    it('responde con 200 en caso de parametros validos', () => {
      return agent.get('/api/iecho?text=test')
        .expect(res => {
          expect('content-type', 'application/json; charset=utf-8');
          expect(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('text');
          expect(res.body).to.have.property('isPalindrome');
        });
    });
  });
  describe('GET /iecho?text=radar', () => {
    it('reponde TRUE si el texto ingresado es palindromo', () => {
      return agent.get('/api/iecho?text=radar')
        .expect(res => {
          expect(res.body.isPalindrome).to.be.equal("true");
        });
    });
  });
  describe('GET /iecho?text=test', () => {
    it('reponde FALSE si el texto ingresado NO es palindromo', () => {
      return agent.get('/api/iecho?text=test')
        .expect(res => {
          expect(res.body.isPalindrome).to.be.equal("false"); 
        });
    });
  });
})