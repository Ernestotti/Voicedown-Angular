import { NoteService } from '../src/services/notes'

describe('Note Service', () => {
    it('save a note with title', () => {
        const note = 'Una nota'
        const title = 'Patri'

        NoteService.save(note, title)
        const result = NoteService.retrieve(title)

        expect(result).toEqual({title: title, note: note})
    })

    it('retrieve a note for a specific title', () => {
        const note = 'Una nota'
        const title = 'Elena'

        NoteService.save(note, title)
        const result = NoteService.retrieve(title)

        expect(result).toEqual({title: title, note: note})
    })
})
