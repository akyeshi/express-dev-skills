const id = new Date().getTime() % 10000000;
const skills = [
  { id: id, skill: "Javascript", level: 6 },
  { id: id, skill: "Java", level: 4 },
  { id: id, skill: "Python", level: 5 },
  { id: id, skill: "AWS", level: 8 },
  { id: id, skill: "React", level: 3 },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  updateOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  // add the id
  skill.id = Date.now() % 1000000;
  // new todos wouldnot be done
  skill.skill = "Dart";
  skills.push(skill);
}

function deleteOne(id) {
  // all properties attached to req.params are strings
  id = parseInt(id);
  // find the index based on the id of the todo object
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1); // inplace mutation
}

function updateOne(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
  // merged right to left object properties
  Object.assign(skill, updatedSkill);
}
