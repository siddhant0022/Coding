const express = require("express");
const problemRouter = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const userMiddleware = require("../middleware/userMiddleware");
const { createProblem, updateProblem, deleteProblem , fetchProblem} = require("../controllers/userProblem");



//create
//fatch
//update
//delete

problemRouter.post("/create", adminMiddleware, createProblem);
problemRouter.put("/update/:problemId", adminMiddleware, updateProblem);
problemRouter.delete("/delete/:problemId", adminMiddleware, deleteProblem);

problemRouter.get("/fetch/:problemId",userMiddleware, fetchProblem);
problemRouter.get("/", userMiddleware, fetchAllProblem);
problemRouter.get("/user/:userId",  userMiddleware, solvedProblembyUser);


module.exports = problemRouter;
