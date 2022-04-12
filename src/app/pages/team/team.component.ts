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
    {'Name':'Vivek Raman', 'Designation':'Managing Director'},
    {'Name':'Ashish', 'Designation':'Chief Advisory Officer - CAO'},
    {'Name':'Pawan', 'Designation':'Global Community Head'},
    {'Name':'Prince Pratap Singh', 'Designation':'Chief Operating Officer - COO'},
    {'Name':'Dev', 'Designation':'Chief Marketing Officer - CMO'},
    {'Name':'Louisa Lopez', 'Designation':'Head of Business Dev'},
  ];

  ngOnInit(): void {
  }

}
