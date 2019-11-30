/**
 * TodolistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req, res) {
    Todolist.find().exec((err, todolist) => {
      if (err) {
        res.send(500, { err: err });
      }
      res.view("list", { todolist: todolist });
    });
  },
  destroy: function(req, res) {
    Todolist.destroy({ id: req.param.id }).exec(err => {
      if (err) {
        res.send(500, { err, err });
      }
      res.redirect('back');
    });
  },
  add: (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    Todolist.create({ title: title, description: description }).exec(err => {
      if (err) {
        res.send(500, { err, err });
      }
      res.redirect("list");
    });
  }
};
