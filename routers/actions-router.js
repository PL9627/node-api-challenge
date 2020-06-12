const express = require("express");
const actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res, next) => {
    actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => next(err))
});

router.get("/:id", (req, res, next) => {
    actions.get(req.params.id)
    .then(action => {
        res.json(200).json(action)
    })
    .catch(err => next(err))
});

router.post("/", (req, res, next) => {

})

router.put("/:id", (req, res, next) => {

})

router.delete("/:id", (req, res, next) => {

})

module.exports = router;