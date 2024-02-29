const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

const { insertData, getData } = require("./dbConnection");

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

app.post('/goNext', async (req, res) => {
    try {
        let result = await insertData(req.body);
        if(result){
            res.redirect('/marksInfo');
        }
    } catch (error) {
        console.log(`Error while inserting data : ${error}`);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})