const express = require('express');
const teamsController = require('../controllers/teams');

const router = express.Router();

router.get('/', teamsController.getTeams);

router.get('/add-team', teamsController.getAddTeam);

router.post('/add-team', teamsController.postAddTeam);

// router.get('/edit-team', teamsController.getEditTeam);

// router.post('/edit-team', teamsController.postEditTeam);

module.exports = router;
