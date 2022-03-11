const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

require('dotenv').config();



const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors({
    origin: '*',
}));

//import routes here
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const fuelRoutes = require('./routes/fuel_quote');

//routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', fuelRoutes);

const PORT = process.env.PORT || 8000;

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('database connected');
    });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
