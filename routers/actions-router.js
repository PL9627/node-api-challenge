const express = require("express");
const actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  actions
    .get()
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  actions
    .get(req.params.id)
    .then((action) => {
      res.json(200).json(action);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "missing data in the body",
    });
  }

  actions
    .insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => next(err));
});

router.put("/:id", (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "missing data in the body",
    });
  }

  actions
    .update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  actions
    .delete(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => next(err));
});

module.exports = router;
