import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import http from 'http';

import { Server } from 'socket.io';

import member from './routers/member.js';
import action from './routers/action.js'
import cooking from './routers/cooking.js'

const app = express();
const PORT = process.env.port || 5000;
const URI = 'mongodb+srv://admin:OxMymnDMa2uvrchm@cluster0.rts8j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors());

app.use( bodyParser.urlencoded({ extended: false }) )
 
app.use( bodyParser.json() )
const server = http.createServer(app);
const io = new Server(server)

app.use('/member', member)
app.use('/action', action)
app.use('/cooking', cooking)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Connect Success');
        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
              });
        });
        server.listen(PORT, () => {
            console.log(`Sever is running on port ${PORT}`)
        });
    }).catch((error) => {
        console.log(error)
    })

