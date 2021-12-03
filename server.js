const express = require("express");

const app = express();



app.use(express.json());
app.use(express.static("public"));

const day = new Date().getDay();
const hours = new Date().getHours();


const curentdate = (req, res, next) => {
  if (hours > 9 && hours <17 && day>0 && day<6){
    next();
}else{
    res.sendFile(__dirname + "/public/outOfService.html")
}
}
app.use(curentdate);

app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
  });
  
  
  
  app.get("/Services", (req, res) => {
    res.sendFile(__dirname + "/public/our.html");
  });

  app.get("/index.css", (req, res) => {
    res.sendFile(__dirname + "/public/navbar.css");
  });








app.listen(4001, (err) => {
  err
    ? console.log("server connection failed")
    : console.log("server connected");
});
