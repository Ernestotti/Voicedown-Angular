import { NoteComponent } from './note.component';
import {screen} from '@testing-library/angular'
import { render } from '@testing-library/angular';

describe('NoteComponent', () => {
  let component: NoteComponent;

  it('should create', () => {
    const component = new NoteComponent()
    
    expect(component).toBeTruthy();
  });
    
  it('Should content a text the note', async () => {
    const aTextNote = 'a text note'
    await render(NoteComponent, {
      componentProperties: {
       note : aTextNote
      }
    })
    const note = await screen.findByText(aTextNote)

    expect(note.innerHTML).toContain(aTextNote)
  })
});
