const express = require('express');
const contactRouter = express.Router();
const Contact = require('../Model/contactSchema');

contactRouter.route('/')
  .get((req, res, next) => {
    Contact.find((err, contact) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.send(contact)
    })
  })
  .post((req, res, next) => {
    const contact = new Contact(req.body);
    // contact.user = req.user._id;
    contact.save((err, savedContact) => {
      if (err) {
        res.status(500)
        return err;
      }
      return res.status(201).send(savedContact)
    })
  })
contactRouter.route('/:_id')
.get((req, res, next) => {
  // console.log(req.params._id)
  Contact.findOne({_id: req.params._id, user: req.user._id}, (err, contact) => {
    if(err){
      res.status(500);
      return next(err);
    };
    if(!contact){
      res.status(404);
      return next(new Error('did not complete form'));
    };
    return res.send(contact);
  });
})
.put((req, res, next) => {
  Contact.findOneAndUpdate(
    {_id: req.params._id, user: req.user._id},
    req.body,
    {new: true},
    (err, contact) => {
      if (err) {
        res.status(500)
        return next(err);
      };
      return res.send(contact);
    }
  );
})
.delete((req, res, next) => {
  Contact.findOneAndDelete({_id: req.params._id}, (err, contact) => {
    if (err){
      res.status(500);
      return next(err);
    }
    return res.send(contact);
  });
});
module.exports = contactRouter;

// you may need to delete the user for contact routes