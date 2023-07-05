const express= require('express');
const app=express();
const path=require('path');

const port=4000;
app.use(express.static('./'));
app.use(express.urlencoded());
app.use(express.json());
app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/contact',(req,res)=>{
    res.sendFile('contact.php',{ root: __dirname });
})


app.listen(port, ()=>{
    console.log(`server running at ${port}`);
});