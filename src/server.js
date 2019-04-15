const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//Express
const app = express();
//Cors middleware
app.use(cors());

//Websocket
const httpserver = require('http');
const sockIo = require('socket.io');
const io = sockIo(httpserver.Server(app));

// SockIo
// io.on('connection', socket => {
//     socket.on('connect', storageBox => {
//         socket.join(storageBox);
//     })
// });

//Mongoose connection to Atlas
mongoose.connect('mongodb+srv://admin:admin@first-d4xiz.mongodb.net/test?retryWrites=true', {useNewUrlParser: true,});

// ### Middlewares ###

//SockIo
// app.use( (req, res, exit) => {
//     req.io = io;
//     return exit
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//Add file path routing
app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));
app.use(require('./routes'));


app.listen(process.env.PORT || 5555);