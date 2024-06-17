const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDb = require("./config/connectDb");
//config dot env file
dotenv.config();

//rest object
connectDb();
const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//user routes
app.use('/api/v1/users', require('./routes/userRoute'));


//transection Routes
app.use('/api/v1/transections', require("./routes/transectionRoutes"));

//port
const PORT = 8080 || process.env.PORT;

//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})