const express = require("express");
const {Student,validateData} = require('../models/studentModel')
const router = express.Router();



router.get("/", async (req, res) => {
  let students = await Student.find();

  res.send(students);
});

router.post("/", async (req, res) => {
    console.log(req.body,"kapil")
  const { error } = validateData(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  //   const category = {
  //     id: categories.length + 1,
  //     name: req.body.name,
  //   };
  //   categories.push(category);

  const student = new Student({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled,
    phoneNo: req.body.phoneNo,
  });

  await student.save();
});

router.put("/:id", async (req, res) => {
  const { error } = validateData(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isEnrolled: req.body.isEnrolled,
      phoneNo: req.body.phoneNo,
    },
    { new: true }
  );

  //   const category = categories.find(
  //     (each) => each.id === parseInt(req.params.id)
  //   );
  if (!student) {
    return res.status(404).send("The student with given id is not found");
  }

  //   category.name = req.body.name;
  res.send(student);
});

router.delete("/:id", async (req, res) => {
  //const category = categories.find((c) => c.id === parseInt(req.params.id));
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    return res.status(404).send("The category with given id is not found");
  }

  res.send("student deleted successfully");

  //   const index = categories.indexOf(category);

  //   categories.splice(index, 1);
  //   res.send("category deleted successfully");
});

router.get("/:id", async (req, res) => {
  //const category = categories.find((c) => c.id === parseInt(req.params.id));

  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(404).send("The student with given id is not found");
  }
  res.send(student);
});



module.exports = router;
