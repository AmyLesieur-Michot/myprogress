import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import database from './database';

database.initialize().then(async () => {
    console.log('Connected to database!');
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on the correct PORT');
}); 