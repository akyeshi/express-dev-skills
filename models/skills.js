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
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
