import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonName: string = '+'
  tooltip: string = 'Añadir nueva nota'

  constructor() { }

  ngOnInit(): void {
  }

}
