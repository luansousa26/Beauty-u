import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
  
  lat = -23.2828262;
  lng = -46.7455076;
  constructor() { }

  ngOnInit() {
  }

}
