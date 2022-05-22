import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo/company')
  .then(data => console.log('connected to db'))
  .catch(error => console.log(error));
