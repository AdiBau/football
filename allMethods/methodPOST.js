const express = require('express');



const methodPOST =(app, client, teams, players)=>
{
app.use(express.json());

app.post('/addNewTeam', (req,res) =>{

// add new team  json form {name: "", code: "", cantry: ""}

 const {teamName, teamCode, teamCantry} = req.body;
 
  if (teamName.length != 0 && teamCode.length == 3 && teamCantry.length != 0) {

         client.connect(err=>{
           if (err){   res.status(404).send('Error connecting to the football database');}
              else{   
                     teams.insertOne(
                        {
                          name: teamName,
                          code: teamCode,
                          cantry: teamCantry,
                          created: new Date(Date.now()),
                        },err=> {
                           if (err){
                              res.status(404).send('Error writing to the TEAMS database');
                           
                                   }
                         else{
                              res.send("Save OK");
                      
                             }
                  });
                  }
            }); 
}
else{
  res.status(404).send('Error writing to the TEAMS database ');

}


})
//-----------------------------------------------

app.post('/addNewPlayer',(req,res)=>{

const {name, lastName, number, position, code} = req.body;
  // add new player json form {name: "", lastName: "", number: "" , position:"" , code:""}
  if (name.length != 0 && lastName.length != 0 && number.length != 0 && position.length != 0 && code.length == 3 ) {
   console.log("IMIE:",lastName,lastName.length,typeof(lastName));
   
  client.connect(err=>{
    if (err){   res.status(404).send('Error connecting to the football database'); }
    else{
      players.insertOne(
        {
        name: name,
        last_Name: lastName,
        number: number,
        position: position,
        created: new Date(Date.now()),
        //...
        code: code,

        },err=>{
        if(err){
          res.status(404).send('Failure to write to the PLAYERS database');
   
        }
        else{
          res.send("Save OK");
    
        }
      });
    }
  }
  );
}
else{
  res.status(404).send('Failure to write to the PLAYERS database. incorrect data entered');
}
})
}


module.exports = methodPOST;