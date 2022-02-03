const { expect } = require('chai');
const { models: { User }, syncAndSeed } = require('./db');
const app = require('supertest')(require('./app'));

describe('my app', ()=> {
  beforeEach(()=> syncAndSeed());
  it('true equals true', ()=> {
    expect(true).equals(true);
  });
  it('true equals true', ()=> {
    expect(true).equals(true);
  });
  it('moe exists', async()=> {
    const moe = await User.findOne({
      where: {
        name: 'moe'
      }
    });
    expect(moe.name).to.equal('moe');
  });
  describe('routes', ()=> {
    describe('GET /api/users', ()=> {
      it('returns the users', async()=> {
        const response = await app.get('/api/users');
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(2);
      });
    });
  });
});
