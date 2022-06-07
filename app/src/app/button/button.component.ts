import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name?: string
  @Output() newItemEvent = new EventEmitter<void>();
  tooltip: string = 'Añadir nueva nota'

  

  ngOnInit(): void {
  }

  clickButton(): void {
    this.newItemEvent.emit();
  }

}
