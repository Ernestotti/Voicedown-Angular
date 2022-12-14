import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Voicedown'
  apiUrl: string = environment.apiUrl
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
  }

  deleteNote(event:string): void {

    this.service.deleteNote(this.title, event).subscribe(() => {
      this.retrieveNote()
    })
  }
}
