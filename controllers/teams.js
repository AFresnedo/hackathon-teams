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

router.get('/:name/edit', function(req, res) {
  //
  // pros/cons of render over redirect here?
  // might need more info as to how login session works before
  // deciding if render or redirect is best
  //
  // "name" is params because of .get defn above
  var teamName = req.params.name;
  // use name to get the team data, required for editing
  var team = teamService.getTeam(teamName);
  // render edit page and give the page the team info
  res.render('/teams/edit', { team: team });
});

router.delete('/:name', function(req, res) {
  // get team name from url (ajax sent it)
  var teamName = req.params.name;
  console.log('after ajax, in delete team, got req.params.name:',
    teamName);
  // send ajax a response
  res.send('(data)delete request for ' + teamName + ' recieved(data)');
  // delete team using helper function in model
  teamService.deleteTeam(teamName);
});

module.exports = router;
