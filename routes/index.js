const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/sum/:n1/:n2", function (req, res) {
  console.log(req.params);
  const n1 = parseInt(req.params.n1);
  const n2 = parseInt(req.params.n2);
  res.send(`Using req.params to grab all the url params
  to get the sum of ${n1} and ${n2} is: ${n1 + n2}`);
});

router.get("/send", (req, res) => {
  res.send("res.send -> hello world");
});

router.get("/json", (req, res) => {
  res.json({
    name: "Tom",
    age: 28,
    favColor: "Purple",
  });
});

module.exports = router;
