var express = require('express');
var fs = require('fs');
var teamService = require('../models/teamService');
var router = express.Router();

// note: these paths are prepended by /teams

router.get('/', function(req, res) {
  var teams = teamService.allTeams();
  res.render('teams/index', { teams: teams });
});

router.post('/', function(req, res) {
  teamService.addTeam(req.body);

  res.redirect('/teams');
});

router.get('/new', function(req, res) {
  res.render('teams/new');
});

router.get('/:name', function(req, res) {
  // search for the team name in all the teams.
  var team = teamService.getTeam(req.params.name);

  res.render('teams/show', { team: team });
});

router.delete('/:name', function(req, res) {
  // get team name from url (ajax sent it)
  var teamName = req.params.name;
  console.log('after ajax, in delete team, got req.params.name:',
    teamName);
  // delete team using helper function in model
  res.send('(data)delete request for ' + teamName + ' recieved(data)');
  teamService.deleteTeam(teamName);
});

module.exports = router;
