const express = require('express');
const mongoose = require('mongoose');
const feedbackController = require('./controllers/feedbackController')

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://lookin-admin:Lookin%402022@restaurant-qr-beta.mxug5qb.mongodb.net/restaurant-qr?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => {
        console.log('connected to db');
        //listen for requests
        app.listen(3000);
    })
    .catch((err) => console.log(err));


//register view engine
app.set('view engine','ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));


//routes
app.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.render('survey',{restro:id});
});


app.post('/collect/:id', feedbackController.create_feedback);

app.get('/thankyou/:id',(req,res)=>{
    const id = req.params.id;
    res.render('thank-you',{restro:id});
});