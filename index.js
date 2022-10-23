import express from 'express';
//take incoming post request body
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

//initialize express application
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepeage.'));

//listen from incoming request
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));