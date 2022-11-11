const {Router} = require('express');
const userRouter = Router()
const {User, Show} = require('../models/index')


userRouter.get('/', async(req, res, id) => {
    try{
        const allUsers = await User.findAll();
        res.send(allUsers)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get('/:id', async(req, res) => {
    try{
        const UserOne = await User.findByPk(req.params.id)
        res.send(UserOne)
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.get('/:id/shows', async(req, res) => {
    try{    
        const allUserShows = await Show.findAll(User.findByPk(id, req, {include: {model: Show}}))
    }
    catch (error) {
        res.send(error)
    }
})

userRouter.put('/2/show9', async(req,res) => {
    try{
        const UserTwo = await User.findByPk(UserTwo)
        res.send(UserTwoShows)
    }
    catch (error) {
        res.send(error)
    }

})



module.exports = userRouter;

