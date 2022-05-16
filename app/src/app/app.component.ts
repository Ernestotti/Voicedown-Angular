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
  draft:string = ""

  constructor(private service: AppService) {}

  ngOnInit() {}

  openDraft(): void {
    this.show = true
  }

  getDraftContent(event:string): void {
    console.log(event)
    this.draft = event
  }
}