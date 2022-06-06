import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  @Output() draftContentEvent = new EventEmitter<string>()

  placeholder: string = 'Escribe aquí tu nota'
  draftNote: string = ''
  username: string = ""
  draftContent: string = ""

  constructor() { }

  ngOnInit(): void {
    this.focusOnLoad()
  }
  
  focusOnLoad(): void {
    setTimeout(function() {
      const textarea = document.querySelector("textarea");
      if(textarea){
        textarea.focus()
      }
    }, 0)
    
  }
  
  save(event: KeyboardEvent) {

   if (event.key === 'Enter') {

      this.sendDraftContent()
    }
  }

  sendDraftContent(): void {
    this.draftContentEvent.emit(this.draftContent)
  }
}
