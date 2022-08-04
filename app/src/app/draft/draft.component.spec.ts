
import userEvent from '@testing-library/user-event';
import { DraftComponent } from './draft.component';
import {screen } from '@testing-library/angular';
import {render} from '@testing-library/angular';
import { NoteComponent } from '../note/note.component';
import { FormsModule } from '@angular/forms'

describe('DraftComponent', () => {
  let component: DraftComponent;

  it('should create', () => {
    const component = new DraftComponent()
    
    expect(component).toBeTruthy();
  });

  it('has a placeholder', () => {
    const component = new DraftComponent()

    const placeholder = component.placeholder

    expect(placeholder).toBe('Escribe aquí tu nota')
  })

  it('keeps the focus when a note is created', async() => {
    const component = await render(DraftComponent,{
      detectChanges: true,
      imports: [FormsModule]
    })
    
    const aNoteText = 'a note'
    let draft = await screen.getByTestId('draft')
    
    await userEvent.type(draft, aNoteText)
    await userEvent.type(draft, '{Enter}')
    draft = await screen.getByTestId('draft')
  
  
    expect(document.activeElement).toBe(draft)
    
    
  });
});
