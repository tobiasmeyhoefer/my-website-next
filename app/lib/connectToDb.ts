import mongoose from 'mongoose';

let connection: {};
const db = "mongodb+srv://tobiasmeyhoefer:ARGhF1AnbuFzPFmX@mywebsitenextjs.uk2a0i4.mongodb.net/myWebsite?retryWrites=true&w=majority&appName=MyWebsiteNextJS";
export const connectToDb = async() => {
    try {
        if(connection) {
            return;
        }
        else {
            const temp = await mongoose.connect(db);
            connection = temp.connections[0].readyState;
            console.log("testolin " + connection)
        }
        
    }
    catch(error) {
        throw new Error("Databank Connecting ERROR:"+ error);
    }
}

