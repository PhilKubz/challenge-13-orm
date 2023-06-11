const router = require('express').Router();
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const tagRoutes = require('./tag-routes');

router.use('/products', productRoutes); // Linking the product routes
router.use('/categories', categoryRoutes); // Linking the category routes
router.use('/tags', tagRoutes); // Linking the tag routes

module.exports = router;
