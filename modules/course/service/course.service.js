const CourseModel = require('../model/Course.model')


function addCourse(courseData){
    console.log(courseData)
    const courseToBeSaved = new CourseModel(courseData);
    courseToBeSaved.save();
}


async function  getCourses(){
   const findCourses = await CourseModel.find({})
     return findCourses;
}

async function  getCourseById(id){
   const findCoursesById = await CourseModel.findById(id)
     return findCoursesById;
}
async function  deleteCoursesById(id){
   const deleteCoursesById = await CourseModel.deleteOne(id)
     return deleteCoursesById;
}





module.exports = {
    addCourse,
    getCourses,
    getCourseById,
    deleteCoursesById,
}