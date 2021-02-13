const Team = require('../models/team');

const getTeams = async (req, res, next) => {
  const teams = await Team.findAll({ raw: true });
  console.log(teams);
  res.render('teams/main', {
    pageTitle: 'Teams',
    path: '/',
    teams
  }); 
};

const getAddTeam =   (req, res, next) => {
  console.log('controller add team');
  res.render('teams/details', {
    pageTitle: 'Create Team',
    path: '/add-team',
    action: 'Create'
  });
};

const postAddTeam = (req, res, next) => {
  const { name, imageUrl, country, description } = req.body;
  Team.create({
      name,
      country,
      imageUrl,
      description
    })
    .then(result => {
      console.log('Team Created: ', result);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getTeams,
  getAddTeam,
  postAddTeam
};
