const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

// GET
app.get('/', (req, res)=> res.send('Hello World!'));
app.get("/blog", (req, res)=> res.sendFile("./blog.html"));

// POST
app.post('/', function(req, res){
    console.log(req.body);
    res.send('POST request')
})

// PUT

app.put('/user', function(req, res){
    res.send('PUT request la /user')
})

// DELETE
app.delete('/user', function(req, res){
        res.send('DELETE request la /user')
})

app.listen(
    3002,
    ()=>console.log('Aplicatie ce ruleaza in portul 3002')
)