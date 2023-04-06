const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include: {
      model: Product,
    },
  });
  if (!categories) {
    res.status(404).json({ error: "No cateogories found" });
  }
  res.json(categories);
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findByPk(req.params.id, {
    include: {
      model: Product
    }
  });
  if (!category) {
    res.status(404).json({ error: "Category does not exist" });
  }
  res.json(category);
});

router.post("/", async (req, res) => {
  // create a new category
 try { 
  const category = await Category.create(req.body);
  const { productIds } = req.body;

  if (productIds) {
    await category.addProducts(productIds);
  }
  res.json({ message: "Successfuly created category" });
} catch (err) {
  res.status(500).json(err);
}
  
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
  const category = await Category.findByPk(req.params.id);
  const { category_name, productIds } = req.body;

  if (!category) {
    res.status(404).json({ error: "No category found" })
  }
  // Updating category name
  await category.update({ category_name });

  // Removing existing products from category
  category.setProducts([]);

  if (productIds) {
    const products = await Product.findAll({
      where: {
        id: productIds
      }
    });
    await category.addProducts(products);
  }
  res.json({ message: "Successfuly updated category" })
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
  const category = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  if (!category) {
    res.status(404).json({ error: "Category does not exist" })
  }
  res.json({ message: "Successfully deleted category" })
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
