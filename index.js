import express from 'express';
const indexjs = express();

indexjs.set("views", "./src/views");
indexjs.set("view engine", "ejs");
indexjs.get("/", (req, res) => {
    try {
        res.render('index', {username: "Ing Saeyang", customer: ['a', 'b', 'c']});
    } catch (error) {
        return res.status(500).send("Result : " + chalk.red(error));
    }
});

export default indexjs;