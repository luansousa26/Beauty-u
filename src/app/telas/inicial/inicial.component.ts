import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  imagensDisponiveis: any[] = [];
  controlador = -1;
  constructor() { }

  ngOnInit() {
    this.imagensDisponiveis = [
      '../../../assets/background.jpg',
      '../../../assets/background2.jpg',
      '../../../assets/background3.jpg',
      '../../../assets/background4.jpg'
    ];
    this.startTimer();
  }
  displayNextImage() {
    this.controlador = (this.controlador === this.imagensDisponiveis.length - 1) ? 0 : this.controlador + 1;
    document.getElementById('img').style.backgroundImage = `url('${this.imagensDisponiveis[this.controlador]}')`;
  }

  displayPreviousImage() {
    this.controlador = (this.controlador <= 0) ? this.imagensDisponiveis.length - 1 : this.controlador - 1;
    document.getElementById("img").style.backgroundImage  = `url('${this.imagensDisponiveis[this.controlador]}')`;
  }

  startTimer() {
    setInterval(() => {
      this.displayNextImage();
    }, 5000);
  }
}
