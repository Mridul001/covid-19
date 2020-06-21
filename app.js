var express  = require("express");
var  bodyParser  = require("body-parser");

var app= express();


app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/assets', express.static('assets'));

app.get("/", function(req, res){
  res.render("index.ejs");
})



app.listen(3000, function(){
  console.log("Okayyyyyz");
})