const express = require('express');
const path = require('path');


const methodDelete = (app, client, teams, players) => {
   
  app.delete('/deleteTeam/:code', (req, res) => {
    const code = req.params.code;
    if(code.length == 3){
    client.connect(err => {
      if (err) { res.status(404).send('Error connecting to the football database'); }
      if (code.length == 3) {
        teams.find({ code: code }).toArray((err, list) => {
          if (err) { res.status(404).send('Error deletion failed'); }
          else {
            if (list.length != 0) {
              teams.findOneAndDelete({ code: code }, err => {
                if (err) {
                  res.status(404).send('Error deletion failed');
                }
                else res.send("delete complid");
              
              })
            }
            else {
              res.status(404).send('Error deletion failed');
            }
          }
        })
      }
    }
    );
  } else{ 'Error deletion failed. incorrect data entered'}
  }
  )
//------------------------------------------------------------------------------
  app.delete('/deletePlayer/:name/:lastName', (req, res) => {
   
    const { name, lastName } = req.params;
    if (name.length != 0 && lastName.length != 0) {

    client.connect(err => {
      if (err) { res.status(404).send('Error connecting to the football database'); }
      if (name.length != null) {
        players.find({
          name: name,
          last_Name: lastName
        }).toArray((err, list) => {
          
          if (err) { res.status(404).send('Error deletion failed'); }
          else {
            if (list.length != 0) {
              players.findOneAndDelete({
                name: name,
                last_Name: lastName
              }, err => {
                if (err) {
                  res.status(404).send('Error deletion failed');
                }
                else res.send("delete complid");
              })
            }
            else {
              res.status(404).send('Error deletion failed');
            }
          }
        })
      }
    }
    );
  }else{ 'Error deletion failed. incorrect data entered'}
  }
  )
}
module.exports = methodDelete;