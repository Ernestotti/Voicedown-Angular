import { NoteService } from '../src/services/notes'

describe('Note Service', () => {
    beforeEach( ()=> {
        NoteService.clean()
    })
    it('retrieves empty notes for an unexisting title', () => {
       
        const notes = NoteService.retrieve('unexistingTitle')

        expect(notes).toEqual([])
    })

    it('saves a note for a new title', () => {
        const title = 'aTitle'
        const aNote = 'some note text'

        NoteService.save(aNote, title)

        const notes = NoteService.retrieve(title)
        expect(notes).toEqual([aNote])
    })

    it('saves new notes for an existing title', () => {
        const title = 'aTitle'
        const aNote = 'some note text'
        const anotherNote = 'some other note text'
        NoteService.save(aNote, title)

        NoteService.save(anotherNote, title)

        const notes = NoteService.retrieve(title)
        expect(notes).toEqual([aNote, anotherNote])
    })
    it('saves new notes for titles', () => {
        const title = 'aTitle'
        const aNote = 'other note text'
        NoteService.save('some note text', 'anotherTitle')

        NoteService.save(aNote, title)

        const notes = NoteService.retrieve(title)
        expect(notes).toEqual([aNote])
    })
    it('Delete notes from a title', () => {
        const title = 'aTitle'
        const aNote = 'note text'
        
        NoteService.save(aNote, title)
        NoteService.delete(aNote, title)
        const notes = NoteService.retrieve(title)

        expect(notes).toEqual([])
    })
})
