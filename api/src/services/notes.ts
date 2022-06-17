import { NotesRepository } from "./notesRepository"

export class NoteService {
    static save(note: string, title: string): void {
        NotesRepository.save(note, title)
         
    }

    static retrieve(title: string): any {
    
        return NotesRepository.retrieve(title)
    
    }
    
    static clean(): void {
        NotesRepository.clean()
    }

    static delete(note: string, title: string): void {
        NotesRepository.delete(note, title)
    } 
}
