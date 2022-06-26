const express = require('express');


const methodTeamStatistic = (app, client, teams, players) => {

app.get('/statistic',(req,res)=>{
 // y2wwEB8eagzrzBZ
 
let NewStatistic = [];
let AllPlayers=0,index=0;
let AllTeams=0;
let newLengthPlayers, newLengthListTeams;
  client.connect(err => {
    if (err) { res.status(404).send('Error connecting to the football database');}
    else{
      teams.find().toArray((err, listTeams)=>{
       AllTeams = listTeams.length; 
      });
      players.find().toArray((err, listPlayers)=>{
        AllPlayers = listPlayers.length;
      });

      teams.find().toArray((err, listTeams)=>{
        if(err){ res.status(404).send('Error reading from the TEAMS database'); }
        else {
         
          listTeams.forEach(elementTims=>{
            
            newLengthListTeams =  NewStatistic.push({
              "Team Name": elementTims.name,
              "Team code": elementTims.code,
              "Team Cantry": elementTims.cantry,
              "Players": [],
                              });

            players.find({code: elementTims.code}).toArray((err, listPlayers)=>{
              if(err){
                res.status(404).send('Error reading from the PLAYERS database');
              }
              else {
               
              if (listPlayers!=0){
               
                listPlayers.forEach(elementPlayers => {
                  index++;
                newLengthPlayers = NewStatistic[listTeams.indexOf(elementTims)].Players.push(
                    { "Name": elementPlayers.name,
                     "Last_Name": elementPlayers.last_Name,
                     "nr":elementPlayers.number,
                      "Position": elementPlayers.position}
                  );
                }
                );
              }
              }
              if(AllPlayers == index && listTeams.length == AllTeams){
                
                 res.setHeader('Content-Type','application/json');
                 res.send(NewStatistic);
                }
            });  
          })
        }
      });
    }
  })
})
}
module.exports = methodTeamStatistic;