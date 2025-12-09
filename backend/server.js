const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});

app.post('/api/messages', (req, res) => {
    const { author, content } = req.body;
    if(author && content){
        const msg = { author, content, time: new Date().toISOString() };
        messages.push(msg);
        res.status(201).json(msg);
    } else {
        res.status(400).json({ error: "Missing author or content" });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));

