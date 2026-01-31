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