import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {screen, fireEvent} from '@testing-library/dom'
import {render} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { DraftComponent } from '../src/app/draft/draft.component'

describe('Voicemode app', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            declarations: [DraftComponent],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })

    it("Draft component is hidden by default", () => {

    })
})