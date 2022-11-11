const {Router} = require('express');
const { Show } = require('../models/Show');
const userRouter = Router()
const {User, show} = require('./index')


userRouter.get('/',async(req, res) => {
    try{
        const allUsers = await User.findAll();
        res.send(allUsers)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get('/', async(req, res) => {
    try{
        const UserOne = await User.findByPk (req, params)
        res.send(UserOne)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get('/shows', async(req, res) => {
    try{    
        const allUserShows = await Show.findAll(User.findByPk(id, req, {include: {model: show}}))
    }
    catch (error) {
        res.send(error)
    }
})

module.exports = userRouter;

