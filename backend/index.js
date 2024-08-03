// Packages
import express from 'express'
import connectDB from './config/database.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'



dotenv.config()


const port = 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// FUNCTIONS
connectDB()

// ROUTES
import userRoutes from './routes/userRoutes.js'
// Main Routes
 app.use('/api/users', userRoutes)

app.listen(
    port,
    () => console.log(`Server running on port: ${port}`)) 