import express from 'express';// import express
import chalk from 'chalk';
import debug from 'debug';
// import morgan from 'morgan';
const app = express(); // call express
const port = 3000;

// app.use(morgan('combined'));

app.get("/", (req, res) => {
    let responseData = "Hello World";
    res.send(responseData);
}) // for manage incomming request and then what server send to client 

app.listen(port, () => {
    debug("Listening on port : " + chalk.green(port));
}) //tell server listen on port