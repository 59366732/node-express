import express from 'express';// import express
import chalk from 'chalk';
import debug from 'debug';
import api from './api/api';
import morgan from 'morgan';
const app = express(); // call express
const PORT= process.env.PORT || 3000;

app.use(morgan('combined')); //client machine  info
app.use("/api/api", api);
app.listen(PORT, () => {
    debug("Listening on port : " + chalk.green(PORT));
}) //tell server listen on port