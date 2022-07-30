import express from 'express';
import chalk from 'chalk';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let responseData = "Get data has successfully";
        res.json({status: 200, message: chalk.green(responseData)}); // for manage incomming request and then what server send to client
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server error" + chalk.red(error));
    }
});
module.exports = router;
