const Bundler = require('parcel-bundler');
const app = require('express')();
const bodyParser = require('body-parser')
const questionsData = require('./src/data/data')
const fs = require('fs')
const file = 'index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

app.get('/questions', (req, res) => {
    console.log("Fetching Data.")
    res.send(questionsData)
});

app.use(bodyParser.json());

app.post('/results', (req,res) => {
    fs.writeFile('./src/data/outPutData.txt', JSON.stringify(req.body), 'utf8', (err) => {
        if(err) {
          console.log('This is a saving error: ',err)
        };
      })
})


// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());


// Listen on port 8080
app.listen(8080, ()=>{console.log('Listening on localhost:8080')});