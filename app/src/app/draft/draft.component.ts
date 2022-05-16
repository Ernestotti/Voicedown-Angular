import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  placeholder: string = 'Escribe aquí tu nota'
  draftNote: string = ''
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  save(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      console.log('it does nothing',this.username);
    }
  }
}
