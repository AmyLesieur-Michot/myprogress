import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

export default app;