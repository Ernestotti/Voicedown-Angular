const storage: any = []

type Note = {title: string, note: string}

export class NoteService {
    static save(note: string, title: string): void {
        storage.push({title: title, note: note})
    }

    static retrieve(title: string): Note {
        const find = storage.find((element: Note) => {
            return element.title === title
        })

        return find
    }
}
