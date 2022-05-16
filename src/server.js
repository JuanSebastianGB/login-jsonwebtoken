import express from 'express';

const app = express();

app.set('port', 3000);

app.listen(() => {
    console.log('Listening on port 3000');
})