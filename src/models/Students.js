const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
    },
    studentSchool: {
        type: String,
    },
    studentGender: {
        type: String,
    },
    studentContact: {
        type: String,
    },
    stdFatherContact: {
        type: String,
    },
    studentImg: {
        type: String,
    },
    studentStd: {
        type: String,
    },
    stream: {
        type: String,
    },
}, {
    timestamps: true,
})

const Students = mongoose.model("Students", studentSchema);

module.exports = {
    Students,
}