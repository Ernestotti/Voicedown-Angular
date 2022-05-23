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

  ngOnInit() {}

  openDraft(): void {
    this.show = true
  }

  closeDraft(): void {
    this.show = false

  }

  getDraftContent(event:string): void {
    this.notes.push(event)    
    this.closeDraft()
  }
}