// imports
import { serverHTTP } from "./server";
import './socketController'; // initializing a socket.io

// ServerPORT
const PORT = process.env.PORT || 3001

// Initializing a server
serverHTTP.listen(PORT, () => {
    return console.log(`⚡️Server is running on: http://localhost:${PORT}`)
})