// all imports
import { Request, Response } from 'express'

class Users {
    // name, email, password, token
    async getCredentials(req:Request, res:Response) {
        const {data} = req.body;

        console.log(`Esse cara aqui é lindo: ${data}`)

        return res.json(data);
    }
}

export {Users};