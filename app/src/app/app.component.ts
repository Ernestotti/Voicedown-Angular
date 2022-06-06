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
        
    this.retrieveNote()
    
    this.reloadOnHashChange()
    
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

  openDraft(): void {
    this.show = true
  }

  getDraftContent(event:string): void {
    this.service.saveNote(this.title, event).subscribe(() => {
      this.retrieveNote()
    })
    

  }
}