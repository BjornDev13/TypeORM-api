import "reflect-metadata";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UserRoutes from './routers/user.routes';
import ClassRoomRoutes from './routers/classRoom.routes'
import { createConnection } from 'typeorm'


const app = express();

createConnection();

//* Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//* Routers
app.use(UserRoutes);
app.use(ClassRoomRoutes);

const port = 4000;
app.listen(port);
console.log(`sever on port ${port}!`);