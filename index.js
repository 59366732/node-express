import express from 'express';
import products from './data/products.json' assert {
    type : "json"
};
const indexjs = express();
const productRouter = express.Router();

indexjs.set("views", "./src/views");
indexjs.set("view engine", "ejs");


productRouter.route("/").get((req, res) => {
    res.render("products", products,);
});
indexjs.use("/products", productRouter);


indexjs.get("/", (req, res) => {
    try {
        res.render('index', {
            username: "Ing Saeyang",
            customer: ['a', 'b', 'c']
        });
    } catch (error) {
        return res.status(500).send("Result : " + chalk.red(error));
    }
});

export default indexjs;
