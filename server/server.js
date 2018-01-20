const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(express.static('./server/public'));
app.use(bodyParser.json()); 

//routes




//testing port
app.listen(port,()=>{
    console.log('up on', port);
});