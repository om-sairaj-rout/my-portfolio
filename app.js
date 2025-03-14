// external modules
const express = require('express');
const ejs = require('ejs');

// internal modules
const homeRouter = require('./routes/homeRoutes');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

//application logic
app.use(express.static('public'));
app.use(homeRouter);

PORT = 3000;
app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})
