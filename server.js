const express = require('express');
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoute')
const { error } = require('console');

const app = express();

//connect to mongo db
const dbURI = 'mongodb+srv://heinwinnaing0:heinwinnaing123@notetuts.fmpoffn.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=notetuts';

mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err))

//register view engine
app.set('view engine','ejs');

//middleware
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.redirect('/blogs')
})


app.get('/about',(req,res)=>{
    res.render('about')
})

app.use('/blogs',blogRoute);


app.use((req,res)=>{
    res.status(404).render('404')
})
