const express = require("express");
const problemRouter = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");



//create
//fatch
//update
//delete

problemRouter.post("/create", adminMiddleware, createProblem);
problemRouter.get("/fetch/:problemId", fetchProblem);
problemRouter.get("/", fetchAllProblem);
problemRouter.patch("/update/:problemId", updateProblem);
problemRouter.delete("/delete/:problemId", deleteProblem);
problemRouter.get("/user/:userId", solvedProblembyUser);


module.exports = problemRouter;
