require('dotenv').config()
const app = require('./app');
const mongoose = require('mongoose');


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connection to database successfull');
  })
  .catch(() => {
    console.log('Not connected');
  });



app.listen(process.env.PORT, () => {
  console.log(`Your app is runnig on port ${process.env.PORT}`);
});
