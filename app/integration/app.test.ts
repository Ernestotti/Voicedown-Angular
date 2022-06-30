import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {screen} from '@testing-library/angular'
import {render} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { DraftComponent } from '../src/app/draft/draft.component'
import userEvent from '@testing-library/user-event'
import { NoteComponent } from '../src/app/note/note.component'
import { FormsModule } from '@angular/forms'
import { AppService } from '../src/app/app.service'
import { Observable, of } from 'rxjs'

class AppServiceMock { 
    notes: { [title: string]: string[] } = {}
    saveNote(title: string, note: string): Observable<object> {
        if(!this.notes[title]) {
            this.notes[title] = []
        }
        this.notes[title].push(note)
        return of({})
    }

    retrieveNote(title: string) {
        const notes = this.notes[title]
        return of(notes)
    }
    deleteNote(title: string, note: string) {
        const newNotes = this.notes[title].filter((element) => {
            return element !== note
        })
        this.notes[title] = newNotes
        return of({})

    }
}

describe('Voicemode app', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            declarations: [DraftComponent, NoteComponent],
            imports: [HttpClientModule, FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [{provide: AppService, useClass: AppServiceMock}]
        })
    })

    it('Should show draft on init',() =>{
        const textArea = 'textbox'

        const draft = screen.getByRole(textArea)
        
        expect(draft).toBeInTheDocument()
    })

    it('Should create notes', async() => {
        const aNoteText = 'a note'
        const anotherNoteText = 'another note'
        
        let draft = screen.getByRole('textbox')
        await userEvent.type(draft, aNoteText)
        await userEvent.type(draft, '{Enter}')
        draft = screen.getByRole('textbox')
        await userEvent.type(draft, anotherNoteText)
        await userEvent.type(draft, '{Enter}')
        
        const note = await screen.findByText(aNoteText)
        const anotherNote = await screen.findByText(anotherNoteText)
        expect(note).toBeInTheDocument()
        expect(anotherNote).toBeInTheDocument()
        
    })
    it('Should delete notes', async() => {
        window.confirm = () => {return true}
        const aNoteText = 'a note'
        let draft = screen.getByRole('textbox')
        await userEvent.type(draft, aNoteText)
        await userEvent.type(draft, '{Enter}')
        let note = await screen.findByText(aNoteText)
        
        const button = screen.getByRole('button')
        await userEvent.click(button)
        
        expect(note).not.toBeInTheDocument()

    })
})