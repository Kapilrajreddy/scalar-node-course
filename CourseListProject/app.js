const express = require('express')
const categories = require('./Routes/categories')
const students = require('./Routes/students')
const courses = require('./Routes/courses')
const mongoose = require('mongoose')

const joi = require('joi')


mongoose.connect("mongodb://127.0.0.1/NodeCourseCategory").then(()=>console.log("mongodb connected successfully")).catch(err=>console.log("couldn't connect to mongodb",err))

const app = express()

app.use(express.json())
app.use('/api/categories', categories)
app.use('/api/students',students)
app.use('/api/courses/',courses)

const port = process.env.PORT || 3000 

app.listen(port,()=>console.log('port running at',port))