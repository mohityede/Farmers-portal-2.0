import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`MongoDB database is running on ${conn.connection.host}:${conn.connection.port}`);
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;