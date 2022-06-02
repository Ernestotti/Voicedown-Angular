
let storage: string[] = []
export class NoteService {
    static save(note: string, title: string): void {
       storage.push(note)
    }

    static retrieve(title: string): any {
        return storage
    }
    static clean(): void {
        storage = []
    }
}
