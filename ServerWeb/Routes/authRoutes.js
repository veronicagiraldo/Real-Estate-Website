const express = require('express');
const User = require('../Model/user');
const authRouter = express.Router();
const jwt = require("jsonwebtoken");

authRouter.post("/signup", (req, res, next) => {
  console.log(req.body);
  User.findOne({username: req.body.username.toLowerCase()}, (err, existingUser) => {
    if(err) {
      res.status(500);
      return next(err);
    }
    if (existingUser !== null){
      res.status(400);
      return next(new Error("That username already exists!"));
    }
    // create user
    const newUser = new User(req.body);
    // pre-save hook fires, encrypts password, and then the .save() is executed
    newUser.save((err, user) => {
      if(err){
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.status(201).send({success: true, user: user.withoutPassword(),token});
    });
  });
});

authRouter.post('/login', (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err){
      res.status(500);
      return next(err);
    }  if(!user) {
      return res.status(403).send({success: false, message: "Username or password are incorrect"})
    } 
    user.checkPassword(req.body.password, (err, match) => {
      if(err) return res.status(500).send(err);
      if(!match) res.status(401).send({success: false, message: "Username or password are incorrect"});
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({ token: token, user: user.withoutPassword(), success: true })
    });
  });
});

module.exports = authRouter;