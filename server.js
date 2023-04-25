const express = require('express');
const app = express();
app.set("view engine","ejs");

const port = 4000;
// app.get('*', function(req, res){
//     res.end('Hello World');
// });



   app.get("/",(req,res)=>{
    res.render("HomePage");
});

app.get("/services",(req,res)=>{
    res.render("OurServices");
});

app.get("/contacts",(req,res)=>{
    res.render("ContactUs");
});


app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});