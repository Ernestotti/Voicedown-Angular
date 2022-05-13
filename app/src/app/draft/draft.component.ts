import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  placeholder: string = 'Escribe aquí tu nota'
  draftNote: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  getText(event: KeyboardEvent): void {
    const keyboardEvent = event.key
    this.draftNote += keyboardEvent
  } 
}
