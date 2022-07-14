import { NoteComponent } from './note.component';
import {screen} from '@testing-library/angular'
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event'

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

  it('test that note emit a event when delete is clicked', async () => {
    const aNoteText = "a note text";
    window.confirm = () => {return true}
    const component = await render(NoteComponent, {
    componentProperties: {
      note: aNoteText
    }})
    let deletedNote = ''
    const saveNoteToDelete = (noteToDelete: string) => {
      deletedNote = noteToDelete
    }
    component.fixture.componentInstance.deleteNoteEvent.subscribe(saveNoteToDelete)
    
    const button = await screen.findByText('🗑️')
    await userEvent.click(button)

    expect(deletedNote).toContain(aNoteText)
  })
})
