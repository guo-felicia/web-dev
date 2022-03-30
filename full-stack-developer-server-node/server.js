import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
const app = express();
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
helloController(app);
app.use(express.json());
userController(app);
app.listen(3000);