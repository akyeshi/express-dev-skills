
const Skills = require('../models/skills'); 

module.exports = {
  index, 
  show 
}; 


function index(req, res, next){
  // res.json(Skills.getAll()); 
  res.render("skills/index", {
    skills: Skills.getAll()
  })
}; 

function show(req, res, next){
  res.render("skills/show", {
    skill: Skills.getOne(req.params.id)
  })
}


