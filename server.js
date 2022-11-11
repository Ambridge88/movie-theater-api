const express = require('express');
const app = express()
const seed = require('./seed.js')
const userRouter = require('./routes/user')
const showRouter = require('./routes/show')



app.use(express.json())
app.use('/users', userRouter)
app.use('/shows', showRouter)

app.listen(3000, async () => {
    await seed()
    console.log('Server is listening to me')

})