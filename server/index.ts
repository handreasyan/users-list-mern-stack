import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "./src/routes/userRoute";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 7000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost';

mongoose
    .connect(MONGO_URL,).then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server started on port : ${PORT}`);
    })

}).catch((err) => {
    console.log(err)
})

app.use('/api', router)