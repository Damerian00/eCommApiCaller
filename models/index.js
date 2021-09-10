// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag} );
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag} );

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


try {
  const categoryData = await Category.findByPk(req.params.id, {

    include: [{ model: Location, through: Trip, as: 'planned_trips' }]
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No traveller found with this id!' });
    return;
  }

  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
