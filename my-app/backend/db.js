const mongoose = require('mongoose');
//  const mongoURI='mongodb+srv://swetasingh8844:P52VdWcoIhyw0X1u@cluster0.kaqutvm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
// mongodb+srv://<username>:<password>@cluster0.keitd5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// const mongoose = require('mongoose');

const mongoDB = async () => {
  const connectionString = 'mongodb+srv://swetasingh8844:P52VdWcoIhyw0X1u@cluster0.kaqutvm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'; // replace with your actual connection string

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

module.exports = mongoDB;
