const mongoose = require("mongoose");
const {Schema} = mongoose;

const problemSchema = new Schema({
    title:{
        type: String, 
        required: true,
        
    },
    description:{
        type: String,
        required: true,
    },
    difficulty:{
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    tags:{
        type: [String],
        required: true,
        enum: ["arrays", "strings", "trees", "graphs", "dp", "linkedlist","stack","queue"],

    },
    visibleTestCases:[
       {
        input: {
            type: String, 
            required: true,  
        },
        output:{
            type: String,
            required: true,
        },
        explanation:{
            type: String,
            required: true,

        }
       }
    ],

    hiddenTestCases:[
       {
        input: {
            type: String, 
            required: true,  
        },
        output:{
            type: String,
            required: true,
        },
       
       }
    ],
    startCode: [
        {
            language: {
                type: String,
                required: true,
            },
            initialCode: {
                type: String,
                required: true,
            }
        }
    ], 
    refereceCode: [
        {
            language: {
                type: String,
                required: true,
            },
            completeCode: {
                type: String,
                required: true,
            }
        }
    ],

    problemCreator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user",

    }
    
    


})
const Problem = mongoose.model("problem", problemSchema);
module.exports = Problem;