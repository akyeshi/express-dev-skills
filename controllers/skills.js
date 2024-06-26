// model: Skills
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

// controllers/skills.js
function index(req, res) {
  const date = new Date(); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0'); 
  const year = date.getFullYear(); 
  const hour = String(date.getHours()).padStart(2, '0'); 
  const minute = String(date.getMinutes()).padStart(2, '0'); 
  const second = String(date.getSeconds()).padStart(2, '0'); 
  const time = `${month}-${day}-${year} ${hour}:${minute}:${second}`; 
  // ejs by default looks into /views folder
  // DO NOT use a leading slash when rendering !
  // render view, also pass in data
  res.render("skills/index", {
    skills: Skills.getAll(),
    title: "All Skills",
    time
  });
}

function show(req, res) {
  // res.send(req.params);
  // res.send(req.body);
  res.render("skills/show", {
    skill: Skills.getOne(req.params.id),
    title: `Skill Detail (#${req.params.id})`,
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  Skills.create(req.body);
  // do a redirect anytime data is changed i.e. post/put
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect("/skills");
}

// Get the edit form:
// when form is submitted, its POST method is changed to PUT
function edit(req, res) {
  const skill = Skills.getOne(req.params.id);
  res.render("skills/edit", {
    skill,
    title: "Edit Skill",
  });
}

//
function update(req, res) {
  Skills.updateOne(req.params.id, req.body);
  res.redirect("/skills");
}
