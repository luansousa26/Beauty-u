import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

   openNav() {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
  }
   closeNav() {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
  }
  alteraCor(opcao) {
    switch (opcao) {
     case 'elas':
     document.getElementById('mySidenav').style.backgroundColor = '#ffc107';
     break;
     case 'normal':
     document.getElementById('mySidenav').style.backgroundColor = '#111';
     break;
     case 'eles':
     document.getElementById('mySidenav').style.backgroundColor = '#4c4445';
     break;
    }
  }
}
