const express = require("express");
const path = require(`path`);
const app = express();
const port = 80;
//EXPRESS SPECIFIC CODES
app.use(`/static`, express.static(`static`)); //for serving static file

//PUG SPECIFIC CODE
app.set(`view engine`, `pug`); //set the template engine as pug
app.set(`views`, path.join(__dirname, `views`)); //set the view directory

//ENDPOINT
app.get(`/demo`, (req, res) => {
    res.status(200).render(`demo`, { title: `hey`, message: `hello duniya` })
})
app.get(`/`, (req, res) => {
    res.status(200).render(`index.pug`)
})

//START SERVER
app.listen(port, () => {
    console.log(`the application started successfully on port ${port}`);
});

