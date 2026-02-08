const { getLanguageById, submitBatch } = require("../utils/problemUtility");




const createProblem = async (req, res) => {
  const { title, description, difficulty, tags, visibleTestCases, hiddenTestCases,
    startCode, referenceCode, problemCreator
  } = req.body;
  try {
   for ( const {language, completeCode} of referenceCode){

    const languageId = getLanguageById(language);
//Batch submission create kr rha hu
    const submissions = visibleTestCases.map((input, output) => ({
      source_code: completeCode,
      language_Id: languageId,
      stdin: input,
      expected_output: output,
    }));
    const submitResult = await submitBatch(submissions);

   }
  }
  catch (err){
    res.status(400).send("Error: " + err.message);

  }
}

const updateProblem = async (req, res) => {
  const {id} = req.params;
  const { title, description, difficulty, tags, visibleTestCases, hiddenTestCases,
    startCode, referenceCode, problemCreator
  } = req.body;

 

  try{
    
  if(!id){
    return res.status(400).send("Problem ID is required");
  }
  const DsaProblem = await Problem.findByid(id);
  if(!DsaProblem){
    return res.status(404).send("Problem not found");
  }
  for ( const {language, completeCode} of referenceCode){

    const languageId = getLanguageById(language);
//Batch submission create kr rha hu
    const submissions = visibleTestCases.map((input, output) => ({
      source_code: completeCode,
      language_Id: languageId,
      stdin: input,
      expected_output: output,
    }));
    const submitResult = await submitBatch(submissions);

   }
    const newProblem = await Problem.findByIdAndUpdate(id, {...req.body}, {new: true}, {runValidators: true});
    res.status(200).send(newProblem);

  }catch (err){
   res.status(400).send("Error:" + err.message);
  }
}
module.exports = { createProblem, updateProblem};