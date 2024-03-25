const express = require('express')
const {Category,validate} = require('../models/categoryModel')

const router = express.Router()




router.get("/", async (req, res) => {

    let categories = await Category.find()

  res.send(categories);
});

router.post("/", async (req, res) => {

   const { error } = validate(req.body);

   if(error) return res.status(400).send(error.details[0].message)

//   const category = {
//     id: categories.length + 1,
//     name: req.body.name,
//   };
//   categories.push(category);

    const category = new Category({
        name:req.body.name
    })

   await category.save()
});

router.put("/:id", async (req, res) => {

     const { error } = validate(req.body);

     if (error) return res.status(400).send(error.details[0].message);

     const category = await Category.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})

//   const category = categories.find(
//     (each) => each.id === parseInt(req.params.id)
//   );
  if (!category) {
    return res.status(404).send("The category with given id is not found");
  }

//   category.name = req.body.name;
res.send(category)
});

router.delete("/:id", async (req, res) => {
  //const category = categories.find((c) => c.id === parseInt(req.params.id));
  const category = await Category.findByIdAndDelete(req.params.id)
  if (!category) {
    return res.status(404).send("The category with given id is not found");
  }

  res.send("Category deleted successfully")

//   const index = categories.indexOf(category);

//   categories.splice(index, 1);
//   res.send("category deleted successfully");
});

router.get("/:id", async (req, res) => {
  //const category = categories.find((c) => c.id === parseInt(req.params.id));

  const category = await Category.findById(req.params.id)
  console.log(category,"kapil")
  if (!category) {
    return res.status(404).send("The category with given id is not found");
  }
  res.send(category);
});




module.exports = router