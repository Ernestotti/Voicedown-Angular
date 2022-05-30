import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Voicedown'
  show: boolean = false
  buttonName: string = '+'
  notes:string[] = []

  constructor(private service: AppService) {}

  ngOnInit() {
    const sessionTitle = window.location.hash
    if (sessionTitle){
      this.title = sessionTitle.replace('#', '')
    }
    
    let lista = localStorage.getItem(this.title)
    if(lista === null){
      lista = JSON.stringify([])
    }

    let notesArray = JSON.parse(lista)
    this.notes = notesArray 
    
    window.addEventListener('hashchange', () => {
      location.reload()
    })
    
  }


  openDraft(): void {
    this.show = true
  }

  closeDraft(): void {
    this.show = false

  }

  getDraftContent(event:string): void {
    this.notes.push(event)
    let notesString = JSON.stringify(this.notes)
    localStorage.setItem(this.title, notesString) 
    this.closeDraft()
  }
}