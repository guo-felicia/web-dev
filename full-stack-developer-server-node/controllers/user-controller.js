// import the array of users
import users from '../controllers/users/users.js';

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
        const type = req.query['type'];
        res.json(findUsersByType(type));
        return;
    }
    
    res.json(users);
}

const findUsersByType = (type) => {
    const user = users.find(u => u.type === type);
    return user;
}


const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}


export default userController;