const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/nodeCourse').then(()=>console.log("Connection Succesful")).catch((err)=>console.error(err))


// Schema 

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true,minlength:6, maxlength:10 },
  tags:{type:Array, validate:{
    validator:function(tags){
        return tags.length>1
    }
  }},
  category:{type:String, required:true, enum:['DSA','Web','Data Science']},
  creator: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
  rating: { type: Number, default:0, required: function(){
    return this.isPublished
  } },
});

const Raj = mongoose.model('courses',courseSchema)

async function createCourse(){

    const course = new Raj({
      tags:[],
      creator:"cherry",
      isPublished:true,
      category:'DSA'
    });

    try{
        const result = await course.save();
        console.log(result);
    }catch(err){
        for(fields in err.errors){
            console.log(err.errors[fields])
        }
    }

    

}
createCourse()

// Comparison operators

// eq (equal)
// gte (greater than and equal)
// gt (greater than)
// lte (less than and equal)
// lt (less than)

// in 
// not in

// logical operators 

//or 
//and



async function getCourses(){
    //const courseList = await Raj.find({rating:{$gte : 4}}).sort({rating:1})
    const courseList = await Raj.find({ rating: { $in: [3.5,4.5,4,5] } }).sort({
      rating: 1,
    }).and([{creator:"raj"}, {rating:{$gt:3}}
]);

    // const courseList = await Raj.find();
    console.log(courseList)
}

//getCourses();

//update

async function updateCourse(id){
    const course = await Raj.findById(id)
    if(!course) return 
     
    course.name = 'sql'
    course.creator = 'reddy'
    course.rating = 4.2 
    const updatedCourse = await course.save()
    console.log(updatedCourse)
}
//updateCourse('65ffe3ee5d7ae8f73cd7fd3d')

//delete 

async function deleteCourse(id){
    const course = await Raj.findByIdAndDelete(id)
    console.log(course)
}
//deleteCourse("65ffe3ee5d7ae8f73cd7fd3d");