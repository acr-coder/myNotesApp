import mongoose from 'mongoose'

const connection = {};

    async function dbConnect(){
        if(connection.isConnected){
            return;
        }
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("database çalıştı");
    }

    export default dbConnect;

    

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://kegitimi:kegitimi123@cluster0.isk58.mongodb.net/deneme?retryWrites=true&w=majority"


// async function dbConnect(){
//     const client = new MongoClient(uri, 
//         { useNewUrlParser: true, useUnifiedTopology: true });
    
//     await client.connect(err =>{
//         const collection = client.db("test").collection("devices");
        
//         console.log("database çalıştıııııııııııııııı");
//         client.close();
//     })    
// }

//     export default dbConnect;