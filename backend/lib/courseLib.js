const courseModel = require('../models/courseModel');
module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}

module.exports.createFirstCourse = async function(){
    const courses = await courseModel.find({});

    if(courses && courses.length ==0){
        const firstCourseInput = {
            "title": "bz DSA",
            "level": "easy"
        };

        const course = new courseModel(firstCourseInput);
        await course.save();
    }
}

module.exports.createCourse = async function(CourseInput){
    const course = new courseModel(CourseInput);
    await course.save();
}

module.exports.createCourse = async function(courseId, UpdateInput){
    await courseModel.findOneAndUpdate({_id: courseId, updatedInput: UpdateInput});
    const course = new courseModel(CourseInput);
    await course.save();
}