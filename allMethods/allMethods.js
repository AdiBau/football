const express = require('express');
const path = require('path');

const methodGET = require('./methodGET.js');
const methodPUT = require('./methodPUT.js');
const methodPOST = require('./methodPOST.js');
const methodDelete = require('./methodDelete.js');
const methodTeamStatistic = require('./methodTeamStatistic.js');



const allMethods = (app, client, teams, players)=>{
methodGET(app, client, teams, players);
methodPUT(app, client, teams, players);
methodPOST(app, client, teams, players);
methodDelete(app, client, teams, players);
methodTeamStatistic(app, client, teams, players);
}


module.exports = allMethods;