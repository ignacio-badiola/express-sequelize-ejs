const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const teams = require('./routes/teams');
const errors = require('./routes/errorHandler');
const sequelize = require('./util/db');

// const Team = require('./models/team');
// const Player = require('./models/player');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(teams);
app.use(errors);

// Team.hasMany(Player);

sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    app.listen(3001);
  }).catch(error => console.log(error));