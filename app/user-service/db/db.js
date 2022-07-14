const {Sequelize} = require('sequelize');
// const config = require('config');

// const dbUserConf = config.get('services.user_service');

// module.exports = new Sequelize(dbUserConf);

module.exports = new Sequelize(
    process.env.DB_NAME_USER, 
    process.env.DB_USER,      
    process.env.DB_PASSWORD,       
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,  
        port: process.env.DB_PORT
    }
);