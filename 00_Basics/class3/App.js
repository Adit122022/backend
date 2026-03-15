const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});
app.post('/create', (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
