const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');
const { DataTypes: { STRING }} = Sequelize;

const User = conn.define('user', {
  name: {
    type: STRING 
  }
});

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await User.create({ name: 'moe'});
};

module.exports = {
  syncAndSeed,
  models: { User }
};
