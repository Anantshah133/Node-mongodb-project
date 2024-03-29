const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const upload = require("./src/utils/multer");
const { connectDB } = require("./src/config/db");
const { insertData } = require("./src/crud/operations");
const PORT = 5000;

connectDB();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("./index.ejs");
})

app.get('/marksInfo', (req, res) => {
    res.render("marksInfo.ejs");
})

app.get('/table-marks', (req, res) => {
    const studentImg = req.query.stdImg;
    res.render("table.ejs", {studentImg});
})

app.get('/student-card', (req, res) => {
    res.render("card.ejs");
})

app.post('/marks-submit', (req, res)=>{
    res.redirect("/student-card");
})

app.post('/goNext', upload.single("studentImg"), async (req, res) => {
    try {
        let result = await insertData({...req.body, studentImg: req.file.filename});
        if(result){
            res.redirect(`/table-marks?stdImg=${result.studentImg}`);
        }
    } catch (error) {
        console.log(`Error while inserting data : ${error}`);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})