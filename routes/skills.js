const express = require('express'); 
const router = express.Router(); 
const skillsCtrl = require('../controllers/skills')


// GET skills's view 
router.get("/", skillsCtrl.index);

// GET /skills/new 
router.get("/new", skillsCtrl.new); 

// GET /skills/:id (show funcationality/action -> display detail of a single todo)
router.get('/:id', skillsCtrl.show); 

// POST /skills 
router.post("/", skillsCtrl.create); 

// DELELE /skills/:id 
router.delete("/:id", skillsCtrl.delete); 

// GET /skills/:id/edit 
router.get("/:id/edit", skillsCtrl.edit); 

// PUT /skills/:id 
router.put("/:id", skillsCtrl.update); 




module.exports = router; 