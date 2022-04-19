import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: [`
  .hover{
    transition: transform 0.5s ease-in-out;
  }
  .hover:hover{
    transform: rotateY(180deg);
  }

  .skewed{
    transform: rotateY(180deg);
  }

  .visibility{
    display: block;
    transition: display 0.5s ease-in-out;
  }
  .invisibility{
    display: hidden;
    transition: display 0.5s ease-in-out;
  }

  `
  ]
})
export class TeamComponent implements OnInit {

  constructor() { }
  x = [faTwitter,faLinkedin];
  total = 5;
  isMore = false;
  public teamlist = [
    {'isTrue':true,'Name':'Ashish', 'Designation':'Co-Founder, Chief Advisor', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
    {'isTrue':true,'Name':'Prince Pratap Singh', 'Designation':'Co-Founder, COO', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
    {'isTrue':true,'Name':'Dev', 'Designation':'Co-Founder, CMO', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
    {'isTrue':true,'Name':'Pawan', 'Designation':'Co-Founder, Global Community Head', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
    {'isTrue':true,'Name':'Louisa Lopez', 'Designation':'Head of Business Dev', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
    {'isTrue':true,'Name':'Vivek Raman', 'Designation':'Managing Director', 'Description':'Eu dolor in irure cillum officia proident excepteur dolore duis magna. Pariatur velit pariatur nulla voluptate dolore eu eiusmod. Enim non cillum quis eu. Magna sint minim laborum voluptate non ea.'},
  ];

  ngOnInit(): void {
  }

}
