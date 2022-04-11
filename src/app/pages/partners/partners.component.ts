import { Component, OnInit } from '@angular/core';
import { faTwitter, faInstagram, faFacebookF, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styles: [
  ]
})
export class PartnersComponent implements OnInit {

  constructor() { }
  x = [faTwitter,faInstagram,faFacebookF,faTelegramPlane];
  ngOnInit(): void {
  }

}
