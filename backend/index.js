
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { pipeline } from '@xenova/transformers';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
  })
);

let chatbot;

(async () => {
  console.log('Loading model...');
  chatbot = await pipeline('question-answering');
  console.log('Model loaded.');
})();


const documents = JSON.parse(fs.readFileSync('documents.json', 'utf8'));


function searchDocuments(query) {
 
  return documents.map((doc) => doc.content).join(' ');
}

// Combined '/chat'
app.post('/chat', async (req, res) => {
  const { messages } = req.body;
  console.log('received /chat');

  if (!chatbot) {
    return res.status(503).send({ message: 'Model is loading, please wait.' });
  }

  try {
    const userMessage = messages[messages.length - 1].content;

    
    const doc = searchDocuments(userMessage);
    console.log('Document found: ', doc);

    let context = '';
    if (doc) {
      context = doc; 
    } else {
      context = 'No relevant documents found.';
    }
  
    const response = await chatbot(userMessage, context);

    const assistantReply = response.answer;
    console.log('Assistant reply: ', assistantReply);

    res.send({ response: assistantReply });
  } catch (error) {
    console.error('Error generating response:', error);
    res.status(500).send({ message: 'Error generating response', error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

