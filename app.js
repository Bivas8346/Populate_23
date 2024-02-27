const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.set('views', 'views');


const WebRouter = require('./router/UiRouter');
app.use(WebRouter);

// const ApiRouter = require('./routes/api');
// app.use("/api", ApiRouter);


const dbcon = "mongodb+srv://rajdasrd8346:6cW8Gp7Y2iueeWP2@cluster0.cwf3mun.mongodb.net/Mymovie";


const port = 9892;
mongoose.connect(dbcon, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    app.listen(port, () => {
        console.log(`Server Is Connected`);
        console.log(`Data Base Is Connected http://localhost:${port}`);
    });
}).catch(error => {
    console.log(error);
});