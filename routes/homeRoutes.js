const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/',(req,res)=>{
    res.render('home',{title : 'Home Page', css: 'home'});
})

homeRouter.get('/about-me',(req,res)=>{
    res.render('about',{title : 'About-me Page', css: 'about'});
})

homeRouter.get('/contact-me',(req,res)=>{
    res.render('contact', {title : 'Contact-me Page', css: 'contact'});
})

homeRouter.get('/projects',(req,res)=>{     
    res.render('project', {title : 'Projects Page', css: 'project'});
})

module.exports = homeRouter;