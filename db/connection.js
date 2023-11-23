//  import and require mysql
const mysql= require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jojames315',
    database: 'employees_db'
})

// message indicating a successfull database connection

db.promise()
.connect()
.then(() => {
    console.log(`\n Connected to the 'employee_db'. \n Enjoy tracking your employees!`);
})
.catch((error) => {
    console.error('Error connecting to the database:', error)
});

module.exports = db;