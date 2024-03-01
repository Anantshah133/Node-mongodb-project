const { Students } = require("../models/Students")

const insertData = async (data) => {
    if(data.studentStd == 10){
        data.stream = "";
    }
    try {
        const newStudent = new Students(data);
        var result = await newStudent.save();
        console.log("Data inserted ", result);
        return true;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    insertData
}