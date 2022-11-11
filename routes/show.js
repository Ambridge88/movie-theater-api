const { Router } = require('express');
const showRouter = Router()
const {User, Show} = require('../models/index')


showRouter.get('/', async(req, res) => {
    try {
        const allShows = await Show.findAll();
        res.send(allShows)
    }
    catch (error){
        res.send(error)
    }

})

showRouter.get('/:id', async(req,res) => {
    try{
        const OneShow = await Show.findByPk(req.params.id)
        res.send(OneShow)
    }
    catch (error){
        res.send(error)
    }
})

showRouter.get('genres/:genre', async(req,res) => {
    try{
        const allShows = await Show.findAll({
            where: {
                genre: req.params.genre
            }
         })
        res.send(allShows)
        
    } 
    catch (error){
        res.send(error)

    }

})

showRouter.delete('/deleterob', async(req,res) =>{
    try{
        const shows = await Show.delete()
        res.send(error)
    }
    catch(error) {
        res.send(error)

    }
})

module.exports = showRouter;
