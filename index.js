import express from 'express';
const indexjs = express();
const productRouter = express.Router();

indexjs.set("views", "./src/views");
indexjs.set("view engine", "ejs");


productRouter.route("/").get((req, res) => {
    res.render("products", {
        products: [
         {title: "A", description: "aaa"}, 
         {title: "B", description: "bbb"},   
         {title: "C", description: "ccc"},   
         {title: "D", description: "ddd"},   
        ],
    });
});
indexjs.use("/products", productRouter);


indexjs.get("/", (req, res) => {
    try {
        res.render('index', {username: "Ing Saeyang", customer: ['a', 'b', 'c']});
    } catch (error) {
        return res.status(500).send("Result : " + chalk.red(error));
    }
});

export default indexjs;