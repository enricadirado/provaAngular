import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class NotificaComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  clean() {
    this.selezione = undefined;
  }
}