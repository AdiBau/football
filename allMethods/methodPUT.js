const { query } = require('express');
const express = require('express');
const path = require('path');

const methodPUT = (app, client, teams, players) => {

  app.put("/playerChangeClub/:name/:last_name/:code", (req, res) => {
    const { name,last_name, code } = req.params;
         
    client.connect(err => {
      if (err) { res.status(404).send('Error connecting to the football database'); }
       else{
        players.updateOne({
          name: name,
          last_Name: last_name,
        }, { $set:{
          code: code,
        }},err =>{
          if(err){
            res.status(404).send('Error connecting to the players database');
          }
          else{
            res.send("Update complid");
          }
        }
        ); 
        }});
      })
}

module.exports = methodPUT; 