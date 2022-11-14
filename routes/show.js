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

showRouter.put('/:id/4', async(req,res) => {
    try{
        const Show = await Show.findPk(req,params.id)
        await showRouter.update({rating: req.params.rating})
        res.send(Show)

    }
    catch (error){
        res.send(error)

    }
})


showRouter.put('/:id/statusUpdate', async(req,res) => {
    try{
        const findStatus = findStatus.dataValues.status
        if(updatedStatus == 'cancelled'){
            await updatedStatus.update({status: 'on-going'})
            res.status(200).send('status was cancelled, is now on-going')
    
        }
        else if(updatedStatus == 'on=going'){
            await updatedStatus.update({status: 'cancelled'})
            res.status(200).send('status was on-going, now cancelled')
        }
    }
    catch (error){
        res.send(error)
    }

}) 

showRouter.delete('/delete', async(req,res) =>{
    try{
        const shows = await Show.delete()
        res.send(error)
    }
    catch(error) {
        res.send(error)

    }
})



module.exports = showRouter;
