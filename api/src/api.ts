import { Request, Response } from 'express'
import express from 'express'
import cors from 'cors'
import { NoteService } from './services/notes'

const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))

app.listen(3001, () => {
    console.log('server started at localhost:3001')
})

app.post('/saveNote', async (req: Request, res: Response) => {
    const note = req.body.note
    const title = req.body.title

    NoteService.save(note, title)
    
    res.status(200)
    res.send({})
})

app.post('/retrieveNote', async (req: Request, res: Response) => {
    const title = req.body.title

    const note = NoteService.retrieve(title)
    
    res.send(note)
})

app.post('/delete-note' , async (req: Request, res: Response) => {
    const note = req.body.note
    const title = req.body.title

    NoteService.delete(note, title)

    res.status(200)
    
})
declare global {
    namespace NodeJS {
        interface Global {
            __rootdir__: string
        }
    }
}
global.__rootdir__ = __dirname || process.cwd()
