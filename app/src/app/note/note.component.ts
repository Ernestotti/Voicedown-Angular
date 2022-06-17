import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: string = ""
  @Output() deleteNoteEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  delete(): void {
    if(confirm("¿Eliminar esta nota?")) {
      this.deleteNoteEvent.emit(this.note)
    }
  }
}
