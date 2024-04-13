const Skills = require("../models/skills");

module.exports = {
  // first index is the name of the property on the todosCtrl(controller)
  // second index is the name of the function below
  index: index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function show(req, res) {
  // res.send(req.params);
  // res.send(req.body);
  res.render("skills/show", {
    skill: Skills.getOne(req.params.id),
    title: `Skill Detail (#${req.params.id})`,
  });
}

// controllers/skills.js
function index(req, res) {
  // ejs by default looks into /views folder
  // DO NOT use a leading slash when rendering !
  // render view, also pass in data
  res.render("skills/index", {
    skills: Skills.getAll(),
    title: "All Skills",
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  // the model is responsible for creating data
  Skills.create(req.body);
  // do a redirect anytime data is changed i.e. post/put
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

function edit(req, res) {
  const skill = Skills.getOne(req.params.id);
  res.render("skills/edit", {
    skill,
    title: "Edit Skill",
  });
}

function update(req, res) {
  // checked element has checked property value either as a 'on' or 'undefined'
  req.body.done = !!req.body.done;
  Todo.updateOne(req.params.id, req.body);
  res.redirect("/skills");
}
