const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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
    res.render("table.ejs");
})
app.get('/student-card', (req, res) => {
    res.render("card.ejs");
})

app.post('/goNext', async (req, res) => {
    try {
        let result = await insertData(req.body);
        if(result){
            res.redirect('/table-marks');
        }
    } catch (error) {
        console.log(`Error while inserting data : ${error}`);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})