const sql = require('mssql');

const dbConfig = {
  user: 'sa',
  password: 'yourdevall',
  database: 'life_manager',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // Necessário se estiver usando o SQL Server localmente
    trustServerCertificate: true // Necessário se estiver usando o SQL Server localmente
  }
};

const connectToDb = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to the database!');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
};

module.exports = { connectToDb, sql };