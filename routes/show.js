const { Router } = require('express')
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
    try {
        const OneShow = await Show.findByPk(req,params.id)
        res.send(OneShow)
    }
    catch(error) {
        res.send(error)
    }
})

showRouter.delete('/', async(req,res) =>{
    try{
        const shows = await Show.delete
        res.send(delete)
    }
    catch(error) {
        res.send(error)

    }
})

