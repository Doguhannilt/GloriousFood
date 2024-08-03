import mongoose from 'mongoose'


const connectDB = async () => {
    try {

        const mongoURI = "mongodb://127.0.0.1:27017/Gloriousfood"

        if (!mongoURI) {
            console.error('MONGO_URI environment variable is not set');
            process.exit(1);
        }

        await mongoose.connect(mongoURI);
        console.log(`Successfully connected to the database`);
    } catch (err) {
        console.error("Database Error", err);
        process.exit(1);
    }
}


export default connectDB