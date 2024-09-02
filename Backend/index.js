const express = require("express");
require('./db/config');
const User = require('./db/user');
const cors = require('cors')
const Products = require('./db/product')

const app = express();


app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    const user = new User(req.body);
    const result = await user.save();
    result.toObject();
    delete result.password;
    resp.send(result);

})

app.post("/login", async (req, resp) => {
    console.log("Finding.......")
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            { (resp.send(user)) }
        }
        else {
            resp.status(400).send({ message: "Invalid email or password" })
        }
    }
   
    else {
        (resp.status(400).send({ message: "invalid email or password" }));
    }
})

app.post("/Product",async (req,resp)=>{
    const product = new Products(req.body);
    const result = await product.save();
    resp.send(result);
})

app.listen(8000);