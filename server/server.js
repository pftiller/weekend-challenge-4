const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/photos.router');
const port = process.env.PORT || 5000;

app.use(express.static('./server/public'));
app.use(bodyParser.json()); 

//routes
app.use('/photos', router);



//testing port
app.listen(port,()=>{
    console.log('up on', port);
});