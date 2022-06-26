const express = require('express');
const cors = require('cors');
const mongo = require('mongodb');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://footballTest:y2wwEB8eagzrzBZ@firstcluster.dpvjtvi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// database----------
const db = client.db("football");
const teams = db.collection("TEAMS");
const players = db.collection("PLAYERS");
//----------------

const allMethods = require('./allMethods/allMethods.js');


const app = express();
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('server lising at port http://127.0.0.1:'+port);
})


app.use(function (req, res, next) {
  req.accepts(["json", "html", "text/plain", 'application/json']);
  res.setHeader('Access-Control-Allow-Origin', '*');
 // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(cors());

allMethods(app, client, teams, players);





