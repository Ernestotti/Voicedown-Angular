import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {screen, fireEvent} from '@testing-library/angular'
import {render} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { DraftComponent } from '../src/app/draft/draft.component'
import { ButtonComponent } from '../src/app/button/button.component'

describe('Voicemode app', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            declarations: [DraftComponent, ButtonComponent],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })

    it("Should open new draft", () => {
        const button = screen.getByRole('button')
        fireEvent.click(button)

        const draft = screen.getByRole('textbox')

        expect(draft).toBeInTheDocument()
    })
})