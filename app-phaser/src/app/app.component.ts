import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
  }

  config = {
    backgroundColor: '#422835',
    parent: 'juego',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    // zoom: 4,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 300
        },
        debug: false
      }
    },
    audio: {
      disableWebAudio: true
    }
  };
  game: Phaser.Game;
  empezarJuego() {

        this.game = new Phaser.Game(this.config);
  }
}
