import { socket } from "../server"

socket.on('connection', (io) => {
    // console.log(`[...status]: ${io.id} its connected!`)

    /** Here's coming */
    io.on('message', async (data) => {
        try {
            io.emit('messages', data)
        } catch (error) {
            console.log(error)
        }
    })

    //  if socket disconnected...
    /*
        io.on('disconnect', () => {
            console.log(`[...status]: Disconnect`)
        })
    */
})