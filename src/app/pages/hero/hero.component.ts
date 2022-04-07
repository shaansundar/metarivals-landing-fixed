import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }
  x = [faTwitter,faInstagram,faFacebookF,faTelegramPlane];
  ngOnInit(): void {
  }

}
