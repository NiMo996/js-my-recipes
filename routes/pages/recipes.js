//recipes.js in the routes/pages folder
const router = require('express').Router()
const path = require('path')


const root = path.join(__dirname, '..', '..', 'public')

const recipes = require('../../data/recipes.json')

router.get('/', (_, response) => 
    {response.sendFile(path.join(root,'index.htm'), (error) => {
        if (error) console.error('Error serving index.htm', error.message)
            if (!response.headersSent)
            response.status(500).send('Error serving index.htm')
    }
    )
})

module.exports = router