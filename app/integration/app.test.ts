import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {screen, fireEvent} from '@testing-library/angular'
import {render} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { DraftComponent } from '../src/app/draft/draft.component'
import { ButtonComponent } from '../src/app/button/button.component'
import userEvent from '@testing-library/user-event'
import { NoteComponent } from '../src/app/note/note.component'
import { FormsModule } from '@angular/forms'

describe('Voicemode app', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            declarations: [DraftComponent, ButtonComponent, NoteComponent],
            imports: [HttpClientModule, FormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })

    it("Should open new draft", () => {
        const button = screen.getByRole('button')
        fireEvent.click(button)

        const draft = screen.getByRole('textbox')

        expect(draft).toBeInTheDocument()
    })

    it("Should create new note", async() => {
        const button = screen.getByRole('button')
        fireEvent.click(button)

        const draft = screen.getByRole('textbox')
        await userEvent.type(draft, 'una nota')
        await userEvent.type(draft, '{Enter}')
        
        const note = await screen.findByText('una nota')

        expect(note).toBeInTheDocument()

    })
    
})