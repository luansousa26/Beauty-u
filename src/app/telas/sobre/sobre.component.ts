import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  lat = -23.28466259;
  lng = -46.7380071;
  constructor() { }

  ngOnInit() {
  }

}
