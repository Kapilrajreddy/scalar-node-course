const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  isEnrolled: {
    type: Boolean,
    default: false,
  },
  phoneNo: { type: String, required: true, minlength: 10, maxlength: 12 },
});

const Student = mongoose.model("Student", studentSchema);

function validateData(student) {
  const schema = {
    name: Joi.string().min(3).required(),
    phoneNo: Joi.string().min(10).required(),
    isEnrolled: Joi.boolean(),
  };

  return Joi.validate(student, schema);
}

exports.Student = Student 
exports.validateData = validateData