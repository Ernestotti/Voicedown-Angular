let notes: { [title: string]: string[] } = {}
export class NoteService {
    static save(note: string, title: string): void {
        if(notes[title]){
            notes[title].push(note)
        } else {
            notes[title] = [note]
        }
    }

    static retrieve(title: string): any {
        if(notes[title]){
            return notes[title]
        } else {
            return []
        }
    }
    static clean(): void {
        notes = {}
    }

    static delete(note: string, title: string): void {
        const newNotes = notes[title].filter((element) => {
            return element !== note
        })
        notes[title] = newNotes
    } 
}
