const express = require("express");
const path = require("path");
const app = express();
const port = 80;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

app.use(express.urlencoded())

// PUG SPECIFIC STUFF
// ENDPOINTS
app.get('/', (req, res)=>{
   const params={ }
    //res.status(200).render('index.html', params);
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get("/contact",(req,res)=>{
    const params={ }
    //res.status(200).render('contact.html', params);
    res.sendFile(path.join(__dirname, '/contact.html'));
})
app.get("/home",(req,res)=>{
    const params={ }
    //res.status(200).render('contact.html', params);
    res.sendFile(path.join(__dirname, '/index.html'));
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});