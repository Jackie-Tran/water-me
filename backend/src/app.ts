require('dotenv').config();
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser, { urlencoded } from 'body-parser';
// Routes
const userRoute = require('./routes/user');
const plantRoute = require('./routes/plant');

const app: Application = express();
const PORT = 8080; // default port to listen

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/plant', plantRoute);

// define a route handler for the default home page
app.get( "/", async ( req: Request, res: Response, next: NextFunction ) => {
    res.send( "Water.me API" );
} );

// start the Express server
app.listen( PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
} );