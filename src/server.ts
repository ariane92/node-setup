import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message : ' Hello dev'});
});  

app.listen(3333);