require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
app.use(express.json());

const {
    createAuthor,
    getAllAuthors,
    getAuthorById
} = require('./controllers/authorController');

app.post('/api/author', createAuthor);
app.get('/api/authors', getAllAuthors);
app.get('/api/author/:id', getAuthorById);

const {
    createNewCourse
} = require('./controllers/courseController');

app.post('/api/course', createNewCourse);

    
app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
});