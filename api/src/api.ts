import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.listen(3001, () => {
    console.log(`server started at localhost:3001`)
})

app.post('/post', async (req: Request, res: Response) => {
    res.send('POST')
})

app.get('/get', async (req: Request, res: Response) => {
    res.send({table: 'Table'})
})

declare global {
    namespace NodeJS {
        interface Global {
            __rootdir__: string
        }
    }
}
global.__rootdir__ = __dirname || process.cwd()
