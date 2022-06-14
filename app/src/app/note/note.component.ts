import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() draft: string = ""

  constructor() { }

  ngOnInit(): void {
  }
  delete(note: string) {
      if(confirm("¿Eliminar esta nota?")) {
      }
    }
}
