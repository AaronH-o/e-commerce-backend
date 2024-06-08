const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const data = await Category.findAll({
      include: [{
        model: Product,
        as: 'products',
      }],
    });
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const data = await Category.findByPk( req.params.id, {
      include: [{
        model: Product,
        as: 'products',
      }],
    });
    console.log(data);
    res.status(200).json(data);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch(err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try{
    const updatedData = Category.update( req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({"updated": updatedData, "updated info": req.body});
  } catch(err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).json();
    }

    await category.destroy();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
