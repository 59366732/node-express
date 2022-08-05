import express from 'express';// import express
import chalk from 'chalk';
import debug from 'debug';
import api from './api/api.js';
const app = express(); // call express
const PORT= process.env.PORT || 3000;
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public/")));
app.use("/api/api", api);
app.listen(PORT, () => {
    debug("Listening on port : " + chalk.green(PORT));
    console.log(`Server is running on port ${chalk.green(PORT)}`);
}) //tell server listen on port