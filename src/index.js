const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
const hbs = require('express-handlebars');
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
    res.render('news')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});