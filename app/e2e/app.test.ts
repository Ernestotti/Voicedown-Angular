import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core'
import {render, screen, fireEvent} from '@testing-library/angular'
import { AppComponent } from '../src/app/app.component'
import { TableComponent } from '../src/app/table/table.component'
import { HttpClientModule } from '@angular/common/http'

describe('Testing library', () => {
    beforeEach( async() => {
        await render(AppComponent, {
            detectChanges: true,
            declarations: [TableComponent],
            imports: [HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        })
    })

    it('accepts input properties between nested components', () => {
        const input = 'Table'

        expect(screen.findByText(input))
    })

    it('collect properties of real requests', () => {
        const response = 'Table'

        expect(screen.findByText(response))
    })

    it('render html', () => {
        const title = 'Atlas'

        screen.debug()

        expect(screen.findByText(title))
    })

    it('fire event between nested components', () => {
        fireEvent.click(screen.getByText('Entrar'))

        expect(screen.findByText('Example Event'))
    })
})