import express from 'express';
const getejs = express();
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

getejs.set("views", __dirname + "./../src/views");
getejs.set("view engine", "ejs");
getejs.get("/", (req, res) => {
    try {
        res.render('index', {username: "Ing Saeyang"});
    } catch (error) {
        return res.status(500).send("Result : " + chalk.red(error));
    }
});

export default getejs;