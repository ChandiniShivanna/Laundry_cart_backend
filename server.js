const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3001
const API = process.env.DATABASE_URL || "mongodb+srv://Chandini_S:Crystal0212@cluster0.l2pby5u.mongodb.net/laundrycart?retryWrites=true&w=majority" // "mongodb+srv://Akanksha:Apawar123@cluster0.6karf8f.mongodb.net/test?retryWrites=true&w=majority"  // mine="mongodb+srv://Chandini_S:Crystal0212@cluster0.l2pby5u.mongodb.net/laundrycart?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
 
const app = require('./app');
dotenv.config();

async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();
