const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/sum/:n1/:n2", function (req, res) {
  console.log(req.params);
  const n1 = parseInt(req.params.n1);
  const n2 = parseInt(req.params.n2);
  res.send(`The sum of ${n1} and ${n2} is: ${n1 + n2}`);
});













module.exports = router;
