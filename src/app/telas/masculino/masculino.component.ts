import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.component.html',
  styleUrls: ['./masculino.component.scss']
})
export class MasculinoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.aplicaEstilo();
  }

  aplicaEstilo() {
    document.getElementById('mySidenav').style.backgroundColor = 'rgba(51, 124, 201, 0.99)';
    document.getElementById('logoNav1').style.backgroundColor = 'rgba(42, 110, 182, 0.82)';
  }
}
