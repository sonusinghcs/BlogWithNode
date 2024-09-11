const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')

const dbURI = 'mongodb+srv://sonu:Sonu1234@blog.7k2ok.mongodb.net/?retryWrites=true&w=majority&appName=Blog'
mongoose.connect(dbURI)
.then(()=>app.listen(3000))
.catch(err => console.log('Error connecting'))
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));






app.get('/', (req, res)=>{
   res.redirect('/blogs')
});


app.get('/about', (req, res)=>{
    res.render('about',{title:'about'})
});


//blog route 

app.use('/blogs',blogRoutes);

app.use((req,res)=>{
    res.status(400).render('404',{title:'404'})
})

