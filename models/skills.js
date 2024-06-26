const skills = [
  { id: new Date().getTime() % 10000000, skill: "Javascript", level: 6 },
  { id: new Date().getTime() % 10000000, skill: "Java", level: 4 },
  { id: new Date().getTime() % 10000000, skill: "Python", level: 5 },
  { id: new Date().getTime() % 10000000, skill: "AWS", level: 8 },
  { id: new Date().getTime() % 10000000, skill: "React", level: 3 },
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
  skill.id = Date.now() % 1000000;
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
  console.log("id: ", id);
  const skill = skills.find((skill) => skill.id === id);
  console.log("skill: ", skill);
  console.log("updatedSkill: ", updatedSkill);

  Object.assign(skill, updatedSkill);
  // mergeSkillWithUpdatedSkill(skill, updatedSkill);
}

function mergeSkillWithUpdatedSkill(skill, updatedSkill) {
  let res = {};
  for (const key in skill) {
    if (key in updatedSkill) {
      res[key] = updatedSkill[key];
    } else {
      res[key] = skill[key];
    }
  }

  for (const key in updatedSkill) {
    if (!(key in skill)) {
      res[key] = updatedSkill[key];
    }
  }
  return res;
}
