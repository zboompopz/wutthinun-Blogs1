const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose
    .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB Connected'))
    .catch(err => {
        console.log(err);
    });

//app
const app = express();


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//bring routes
const indexRoutes = require('./routes/index');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth'); 
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/users');

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes midlleware
app.use('/api', indexRoutes);
app.use('/api', blogRoutes);
app.use('/api', authRoutes);
app.use('/api', productRoutes);

//port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server runing on `);
    console.log(`http://localhost:${port}`);
});