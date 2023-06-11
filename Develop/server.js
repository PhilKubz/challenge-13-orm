const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// linking the API routes
app.use('/api', routes);

// Synchronize the models with the database
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Unable to synchronize the database:', error);
  });

