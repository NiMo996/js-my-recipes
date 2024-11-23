//api/v1/recipes.js
const router = require('express').Router() 

const  recipes = require('../../../data/recipes.json')

router.get('/', (req, res) => {
    const recipeSummaries = recipes.map(({ id, title, image, prepTime, difficulty }) => ({ id, title, image, prepTime, difficulty })) // maps the data to only include the id, title, image, prepTime, and difficulty
    res.json(recipeSummaries) //res.send sends the data to the client side
    })

router.post('/recipe/add', (req, res) => {
    const { id, title, image, prepTime, ingredients, instructions, difficulty} = req.body
    //generating a new unique id
    const newId = recipes.length + 1
    recipes.push({ id: newId, title, image, prepTime, ingredients, instructions, difficulty})
    res.send({ message: `Recipe with the title ${title} has been added`})
}
)

router.get('/recipe/:id', (req, res) => {
    const { id } = req.params
    const recipe = recipes.find(recipe => recipe.id === parseInt(id))
    if (recipe) res.json(recipe)
    else res.status(404).json({ message: `Recipe with id ${id} not found`})
})
  
module.exports = router