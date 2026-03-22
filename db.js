const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_course'
})

connection.connect((err) => {
    if (err) {
        console.log('error', err)
        return
    } else {
        console.log('เชื่อมต่อ MySQL สำเร็จแล้ว! ✅')
    }
})

module.exports = connection
//ได้แล้วครับ