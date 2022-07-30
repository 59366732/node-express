import express from 'express';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
const router = express.Router();

router.use(cookieParser());
router.get('/', async (req, res) => {
    try {
        let text = "Get data has successfully";
        res.json({status: 200, message: text}); // for manage incomming request and then what server send to client
        console.log("Result : " + chalk.green(text.toString()));
        console.log('Cookies: ', req.cookies);
        console.log('Signed Cookies: ', req.signedCookies);
    } catch (error) {
        console.log(chalk.green(error));
        return res.status(500).send("Result : " + chalk.green(error));
    }
});
export default router;
