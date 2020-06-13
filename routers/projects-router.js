const express = require("express");
const projects = require("../data/helpers/projectModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  projects
    .get()
    .then((project) => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({
          message: "This post does not exist",
        });
      }
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {

});

router.post("/", (req, res, next) => {

});

router.put("/:id", (req, res, next) => {

});

router.delete("/:id", (req, res, next) => {
    
});

module.exports = router;
