import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

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

}
