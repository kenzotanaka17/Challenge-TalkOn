const express = require('express');
const cors = require('cors');
const { pipeline } = require('@xenova/transformers');

const app = express();
app.use(express.json());
app.use(cors());

let chatbot;

(async () => {

    console.log('Loading Model...');
    chatbot = await pipeline('conversational', 'gpt2');
    console.log('Model loaded');
})();

app.post('/chat', async (req, res) =>{
    const {messages} = req.body;
    if (!chatbot){
        return res.status(503).send({message : 'Model is loading, please wait. '});
    }

    try{
        const conversation = messages.map((msg) => msg.content).join('\n');
        const response = await chatbot(conversation);

        res.send({response: response.generated_text});
    }
    catch(error){
        console.error('Error generating response: ', error);
        res.status(500).send({message: 'Error generating response. '});
    }

});

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});

const fs = require('fs');
const documents = JSON.parse(fs.readFileSync('documents.json', 'utf8'));

function searchDocuments(query){
    return documents.find((doc) => doc.content.includes(query));
}

app.post('/chat', async (req, res) =>{
    const { messages } = req.body;

    if(!chatbot){
        return res.status(503).send({message: 'Model is loading, please wait... '});
    }

    try {
        const userMessage = messages[messages.length - 1].content;
    
        const doc = searchDocuments(userMessage);
    
        let context = '';
        if (doc) {
          context = `\n\nHere's some information from our documents:\n${doc.content}`;
        }
    
        const conversation = messages.map((msg) => msg.content).join('\n') + context;
    
        
        const response = await chatbot(conversation);
    
        res.send({ response: response.generated_text });
      } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).send({ message: 'Error generating response' });
      }

});