import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/Routes.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => res.json({message: "Welcome to CRUD with Firebase"}));

app.use('/api', routes);


export default app;