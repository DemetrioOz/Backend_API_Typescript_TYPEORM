import 'reflect-metadata';
import createConnection from './database';
import express from 'express'; 
import { routes } from './routes';

createConnection();
const server = express();

server.use(express.json())
server.use(routes)

server.listen(5000, () => {
  console.log("running server")
})