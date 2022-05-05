import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  placeholder: string = 'Escribe aquí tu nota'

  constructor() { }

  ngOnInit(): void {
  }

}
