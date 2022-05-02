import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Seed';
  tableTitle?: string
  event?: string

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.get().subscribe((response: Record<string,string>) => {
      this.tableTitle = response.table
    })
  }

  example(event: string): void {
    this.event = event
  }
}
