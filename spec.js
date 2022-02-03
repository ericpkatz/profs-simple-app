const { expect } = require('chai');
const { models: { User }, syncAndSeed } = require('./db');

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
});
