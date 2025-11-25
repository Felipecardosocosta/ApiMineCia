const mysql = require("mysql2")
const { createPool } = require("mysql2/promise")
require("dotenv").config()

const pool = createPool({
    host: process.env.HOST,
    user: 'root',
    port: process.env.PORT,    
    password: process.env.SENHA_BD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
    
})

module.exports = pool