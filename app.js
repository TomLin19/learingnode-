const express = require('express');
const path = require('path');   

// herku assign a port when is deploys 
const port = process.env.PORT||3000;  
// a double pipe name "or"

const app = express();

app.use(express.static('public'));


// a forward slash is the home route
app.get('/',(req,res)=>{
    console.log('at the home route');
    res.sendFile(paht.join(__dirname+ '/views/index.html'))
});

app.get('/contact',(rep,res)=>{
    console.log('at the contact route');
    res.sendFile(paht.join(__dirname+ '/views/contact.html'));
});

app.listen(port,() =>{
    console.log(`Sever running at ${port}`);
});


