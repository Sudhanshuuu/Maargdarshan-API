const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

router.post("/", async (req, res) => {
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const prompt = req.body.message;
      
        const result = await model.generateContent(prompt);
        const response =  result.response;
        const text = response.text();
        res.send(text).status(200);
    }
    catch(err){
        res.json(err).status(500);
    }

    
});

module.exports = router;
