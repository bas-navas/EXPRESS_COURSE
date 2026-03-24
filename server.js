const express = require('express')
const app = express()
const port = 3000
const myMiddleware = require('./middleware/myMiddleware')

//Middleware ที่แสดงข้อมูลทุกครั้งที่มี Request เข้ามา

// Middleware
app.use(express.json())
app.use(myMiddleware)

// ── แบบเก่า (array) ──────────────────────

// ข้อมูลจำลอง เก็บไว้ในตัวแปรก่อน
// let users = [
//     { id: 1, name: "Bas", age: 25 },
//     { id: 2, name: "John", age: 30 },
// ]

// app.get('/users', (req, res) => {
//     // ## แบบที่ 2 — Query String
//     const name = req.query.name
//     if (name) {
//         const result = users.filter(u => u.name === name)
//         res.json(result)
//     } else {
//         res.json(users)
//     }
// })

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const user = users.find(u => u.id === id)

//     if (user) {
//         res.json(user)
//     } else {
//         res.json({ message: 'ไม่พบ' })
//     }
// })


// app.get('/', (req, res) => {
//     res.send('ยินดีต้อนรับสู่ Express!')
// })

// app.get('/about', (req, res) => {
//     res.json({
//         page: "about",
//         author: 'Bas'
//     })
// })

// app.post('/users', (req, res) => {
//     const { name, age } = req.body

//     const user = {
//         id: users[users.length - 1].id + 1,
//         name: name,
//         age: age
//     }

//     users.push(user)
//     res.json(user)
// })

// // แก้ไข้
// app.put('/users/:id', (req, res) => {
//     const id = Number(req.params.id)
//     const { name, age } = req.body
//     const index = users.findIndex(u => u.id === id
//     )

//     if (index === -1) {
//         res.json({
//             message: 'ไม่พบ user'
//         })
//     } else {
//         users[index] = { id, name, age }
//         res.json(users[index])
//     }
// })

// //DELETE /users/:id
// app.delete('/users/:id', CheckAuth, (req, res) => {
//     let id = Number(req.params.id)
//     users = users.filter(u => u.id !== id)
//     res.json({ message: 'success' })
// })


// ── แบบใหม่ (MySQL) ──────────────────────

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})