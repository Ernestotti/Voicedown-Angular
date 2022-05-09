import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {render, screen, fireEvent} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { HttpClientModule } from '@angular/common/http'

describe('Testing library', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })
    it("it's works", () => {
        expect(true).toBeTruthy()
    })
})