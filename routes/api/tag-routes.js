const router = require('express').Router();
const { Tag, Product, Category, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, { include: [{model: Category}, { model: Product, through :ProductTag }]})
  
  // be sure to include its associated Category and Tag data
  
   .then((updatedProduct) => {
      // Sends the updated book as a json response
      res.json(updatedProduct);
    })
    .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
