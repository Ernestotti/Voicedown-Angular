import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Voicedown'
  show: boolean = true
  notes:string[] = []

  constructor(private service: AppService) {}

  ngOnInit() {
    const sessionTitle = window.location.hash
    if (sessionTitle){
      this.title = sessionTitle.replace('#', '')
    }
        
    this.retrieveNote()
    
    this.reloadOnHashChange()    
  }
  
  downloadNotesAsTxt() {
    let content = this.title.toUpperCase ()+ '\n\n'
    content += this.notes.join('\n')
    const blob = new Blob([content], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob);
    
    const anchor = document.createElement('a');
    anchor.download = this.title + '.txt'
    anchor.href = url
    anchor.click()
  }

  reloadOnHashChange():void {
    window.addEventListener('hashchange', () => {
      location.reload()
    })
  } 

  retrieveNote(): void {
    this.service.retrieveNote(this.title).subscribe((response: string[]) => {
      this.notes = response
    })
  }

  getDraftContent(event:string): void {
    this.service.saveNote(this.title, event).subscribe(() => {
      this.retrieveNote()
    })
    this.createFileTxt(this.notes.toString())
  }
  createFileTxt(notes: BlobPart): void {
    const data = this.notes;
    console.log(data[this.notes.length - 1])
    const archivo = new Blob([notes], { type: 'text/plain' })
    console.log(archivo)
  }

  deleteNote(event:string): void {
    
    this.service.deleteNote(this.title, event).subscribe(() => {
      this.retrieveNote()
    })
  }
}