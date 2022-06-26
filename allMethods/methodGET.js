const express = require('express');
const path = require('path');



const methodGET =(app, client, teams, players)=>{

  app.get('/',(req,res)=>{
  app.use(express.static(path.join(__dirname, 'apka')));
  res.sendFile('index.html', {
 root: path.join(__dirname, '..','apka'),})  
})


  app.get('/teams_list', (req, res) => {
    console.log('/teams_list')
    client.connect(err=>{
      if(err){  res.status(404).send('Error connecting to the football database'); }
      teams.find().toArray((err, list)=>{
        if(err){
          res.status(404).send('Error reading from the TEAMS database');
        
        }
        else {
        res.setHeader('Content-Type','application/json');
        res.send(list);
      
        }
      })
      
    }
   
    );
})

app.get('/playerList', (req, res) => {
 
 client.connect(err=>{
    if(err){  res.status(404).send('Error connecting to the football database'); }
         
    players.find().toArray((err, list)=>{
      if(err){
        res.status(404).send('Error reading from the PLAYERS database');
      }
      else {
      res.setHeader('Content-Type','application/json');
      res.send(list);
      }
    })
   
  }
  );}
)

}

module.exports = methodGET;