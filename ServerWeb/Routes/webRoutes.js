const express = require('express');
const webRouter = express.Router();
const List = require('../Model/listSchema');

// const web = require('../Model/websiteSchema')
// webRouter.route('/contact')
//   // .get((req, res, next) => {

//   // })
//   //   .
webRouter.route('/')
  .get((req, res, next) => {
    List.find({user: req.user._id},(err, lists) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.send(lists)
    })
  })
  .post((req, res, next) => {
    const list = new List(req.body);
    list.user = req.user._id;
    list.save((err, newList) => {
      if (err) {
        res.status(500)
        return next(err);
      }
      return res.status(201).send(newList)
    })
  })
webRouter.route('/:_id')
  .get((req, res, next) => {
    List.findOne({_id: req.params._id, user: req.user._id}, (err, list) => {
      if(err){
        res.status(500);
        return next(err);
      };
      if(!list){
        res.status(404);
        return next(new Error('no list item found'));
      };
      return res.send(list);
    });
  })

  .put((req, res, next) => {
    List.findOneAndUpdate(
      {_id: req.params._id, user: req.user._id},
      req.body,
      {new: true},
      (err, list) => {
        if (err) {
          res.status(500)
          return next(err);
        };
        return res.send(list);
      }
    );
  })
  .delete((req, res, next) => {
    List.findOneAndRemove({_id: req.params._id, user: req.user._id}, (err, list) => {
      if (err){
        res.status(500);
        return next(err);
      }
      return res.send(list);
    });
  });
module.exports = webRouter;