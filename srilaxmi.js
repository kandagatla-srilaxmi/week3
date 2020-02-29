const express= require('express');
const app = express();

app.use(express.json());

app.post('/post',(req,res)=>{
    username = req.body.username;
    password = req.body.password;

    if(username === "rohit" && password === "rohit"){
        res.send("hi sriLaxmi");
    } else{
        res.send("evad ra nuvvu");
    }
});

app.listen(4000,()=>{
    console.log("server running at 3000");
})