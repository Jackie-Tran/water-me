require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
// Routes
const userRoute = require('./routes/user');

const app: Application = express();
const PORT = 8080; // default port to listen

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoute);

// define a route handler for the default home page
app.get( "/", async ( req: Request, res: Response, next: NextFunction ) => {
    res.send( "Hello World!" );
} );

// start the Express server
app.listen( PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
} );