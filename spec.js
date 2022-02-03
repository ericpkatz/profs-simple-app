const { expect } = require('chai');

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');
const { DataTypes: { STRING }} = Sequelize;

const User = conn.define('user', {
  name: {
    type: STRING 
  }
});
describe('my app', ()=> {
  beforeEach(async()=> {
    await conn.sync({ force: true });
  });
  beforeEach(async()=> {
    await User.create({ name: 'moe' });
  });
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
