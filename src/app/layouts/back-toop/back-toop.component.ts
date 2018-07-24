import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-back-toop',
  templateUrl: './back-toop.component.html',
  styleUrls: ['./back-toop.component.scss']
})
export class BackToopComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      document.getElementById('myBtn').style.display = 'block';
    } else {
      document.getElementById('myBtn').style.display = 'none';

    }
  }
}