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
        type: Number,
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