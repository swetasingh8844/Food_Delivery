const mongoose = require('mongoose');
//  const mongoURI='mongodb+srv://swetasingh8844:P52VdWcoIhyw0X1u@cluster0.kaqutvm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
// mongodb+srv://<username>:<password>@cluster0.keitd5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// ARvXvoyvRQSnHvHP
// const mongoose = require('mongoose');

const mongoDB = async () => {
  // const connectionString = 'mongodb+srv://swetasingh8844:ARvXvoyvRQSnHvHP@cluster0.keitd5c.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'; // replace with your actual connection string
  const connectionString ='mongodb+srv://swetasingh8844:P52VdWcoIhyw0X1u@cluster0.kaqutvm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
  try {
    await mongoose.connect(connectionString);
     console.log('Successfully connected to MongoDB');

     const fetched_data=await mongoose.connection.db.collection("food_items");
     const data= await fetched_data.find({}).toArray(); 
     const fetch_data=await mongoose.connection.db.collection("foodCategory");
     const catdata= await fetch_data.find({}).toArray(); 
      
     
     // console.log(data);
     global.food_items=data;
     global.foodCategory=catdata;
  
  }
   catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};
module.exports = mongoDB;
