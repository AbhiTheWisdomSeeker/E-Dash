const express = require("express");
const app = express();

app.get("/",(req,resp)=>{
    resp.send("Evrey thing is Fine");
})

app.listen(8000);