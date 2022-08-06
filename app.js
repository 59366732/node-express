import express from 'express'; // import express
import chalk from 'chalk';
import createDebugMessages from 'debug';
const debug = createDebugMessages('app');
import getjson from './api/getjson.js';
import getejs from './api/getejs.js';
import indexjs from './index.js';
const app = express(); // call express
const PORT = process.env.PORT || 3000;

import path from 'path';
import {fileURLToPath} from 'url';
const web_type = "dynamics";
if (web_type === "statics") {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname, "/public/")));
} else if (web_type === "dynamics") {
    const test = false;
    if (test === true) {
        app.use("/api/getjson", getjson);
        app.use("/api/getejs", getejs);
    }
    const index_path_01 = "/";
    const index_path_02 = "/index";
    app.use(index_path_01, indexjs);
    app.use(index_path_02, indexjs);
}
app.listen(PORT, () => {
    debug("listening on port : " + chalk.green(PORT));
    console.log(`Server is running on port ${
        chalk.green(PORT)
    }`);
}) // tell server listen on port
