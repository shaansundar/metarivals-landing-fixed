import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: [
  ]
})
export class TeamComponent implements OnInit {

  constructor() { }
  x = [faTwitter,faLinkedin];
  public teamlist = [
    {'Name':'Vivek Raman', 'Designation':'Managing Director', 'Experience':'Regrob'},
    {'Name':'Ashish', 'Designation':'Chief Advisory Officer', 'Experience':'Regrob'},
    {'Name':'Pawan', 'Designation':'Global Community Head', 'Experience':'Ureqa'},
    {'Name':'Prince P Singh', 'Designation':'Head of Marketing', 'Experience':'Coti'},
    {'Name':'Dev', 'Designation':'Chief Marketing Officer', 'Experience':'Okex'},
    {'Name':'Louisa Lopez', 'Designation':'Head of Business Dev', 'Experience':'Safe Launch'},
  ];

  ngOnInit(): void {
  }

}
