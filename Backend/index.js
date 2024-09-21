const express = require("express");
require('./db/config');
const User = require('./db/user');
const cors = require('cors')
const Products = require('./db/product')

const app = express();

const Jwt = require('jsonwebtoken');
const jwtKey = "E-comm"                                                                            /// we can name it anyhting but should be secret


app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    const user = new User(req.body);
    const result = await user.save();
    result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "Something went wrong" })
        }
        else {
            resp.send({ result, token: token });
        }

    })

})

app.post("/login", async (req, resp) => {
    console.log("Finding.......")
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "Something went wrong" })
                }
                resp.send({ user, token: token });

            })
        }
        else {
            resp.status(400).send({ message: "Invalid email or password" })
        }
    }

    else {
        (resp.status(400).send({ message: "invalid email or password" }));
    }
})




app.post("/Product", varifyToken, async (req, resp) => {
    const product = new Products(req.body);
    const result = await product.save();
    resp.send(result);
})



app.get('/products', async (req, resp) => {
    const result = await Products.find();
    if (result.length > 0) {
        resp.send(result)
    }
    else {
        resp.status(400).send({ message: "No products found" })
    }
}
)





app.delete('/products/:id', async (req, resp) => {
    const result = await Products.deleteOne({ _id: req.params.id });
    resp.send(result)
})





app.get('/products/:id', async (req, resp) => {
    const result = await Products.findOne({ _id: req.params.id });
    if (result) {
        resp.send(result)
    }
    else {
        resp.status(400).send({ message: "No product found" })
    }
})

app.put('/product/:id', async (req, resp) => {
    let result = await Products.updateOne({
        _id: req.params.id
    },
        {
            $set: req.body
        })
    resp.send(result)
})


app.get('/search/:key', varifyToken, async (req, resp) => {
    const result = await Products.find({
        "$or": [
            { name: { $regex: req.params.key } },
            // {price:{$regex: req.params.key}},
            { category: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },

        ]
    });
    resp.send(result);

})


function varifyToken(req, resp, next){
    let token = req.headers['authorization'];
    if(token) {
        token = token.split(' ')[1];
        Jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                resp.status(401).send({ result: "Please Provide valid token" })
            } else {
                next();
            }
        });
    } else {
        resp.status(403).send({ result: "Please add token with header" })
    }
}

app.listen(8000);