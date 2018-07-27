import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feminino',
  templateUrl: './feminino.component.html',
  styleUrls: ['./../masculino/masculino.component.scss']
})
export class FemininoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.aplicaEstilo();
  }
  
  aplicaEstilo() {
    document.getElementById('mySidenav').style.backgroundColor = '#e91e63';
    document.getElementById('logoNav1').style.backgroundColor = '#e91e63';
  }
}
