import { Component, OnInit, VERSION } from '@angular/core';
import { TempCity } from './temp-city';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [CommonModule]
})
export class RootComponent implements OnInit {

  title: string = 'Temperature in Angular ' + VERSION.major;
  cities: Array<TempCity> = [
    new TempCity('Torino', '14'),
    new TempCity('Milano', '15'),
    new TempCity('Genova', '18'),
  ];
  constructor() { }

  ngOnInit() {
  }

}