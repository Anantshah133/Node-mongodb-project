const { Students } = require("../models/Students")

const insertData = async (data) => {
    if (data.studentStd == 10) {
        data.stream = "";
    }
    try {
        const newStudent = new Students(data);
        var result = await newStudent.save();
        return result || null;
    } catch (err) {
        console.log("Error while inserting data : " + err);
    }
}

module.exports = {
    insertData
}