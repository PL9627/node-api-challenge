const express = require("express");
const projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res, next) => {
    projects
    .get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => next(err));
})

router.get("/:id", (req, res, next => {

}))

router.post("/", (req, res, next) => {

})

router.put("/:id", (req, res, next) => {

})

router.delete("/:id", (req, res, next) => {
    
})

module.exports = router;