const mongoose = require('mongoose');
const mongoURI='mongodb+srv://swetasingh8844:P52VdWcoIhyw0X1u@cluster0.kaqutvm.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'
// mongodb+srv://<username>:<password>@cluster0.keitd5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoDB = async () => {
  
    await mongoose.connect(mongoURI, { useNewUrlParser: true}, async(err,result)=>{
        if(err) {
            console.error('Failed to connect to MongoDB', err);
        }
    
    else{
        console.log('Connected to MongoDB');
    }
});
  
}
module.exports = mongoDB();


