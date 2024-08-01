// Packages
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'



dotenv.config()
const port = 5000

// connectiontoDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Route
// app.use('/api/users', userRoutes)

app.listen(port, () => console.log(`Server running on port: ${port}`)) 