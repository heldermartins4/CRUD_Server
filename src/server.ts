/** All imports */
import express from "express";
import cors from "cors"
import http from "http";
import { Server } from "socket.io";
import { router } from "./routes";

// setup
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(router) // routes | controllers

// create a server
const serverHTTP = http.createServer(app);
// conf. Socket.io
const socket = new Server(serverHTTP, {
    cors: {
        origin: `http://localhost:3000`
    }
});

export {serverHTTP, socket};