const { connectDB } = require("./src/config/db");
const { insertData } = require("./src/crud/operations");
connectDB();

let data = {
    studentName: "Heet",
    studentSchool: "XYZ",
    studentContact: "1234567890",
    stdFatherContact: "0987654321",
    studentImg: "xyz.jpg",
    studentStd: "12",
    stream: "commerce",
}

insertData(data);