import express from 'express';
const productsRouter = express.Router();
// import products from './../../data/products.json' assert {
//     type : "json"
// };

// const {default: products} = await import ('./../../data/products.json', {
//     assert: {
//         type: "json"
//     }
// })

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products: products
    },);
});
productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {product: products[id]});
})


export default productsRouter;
