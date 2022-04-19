import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styles: [
  ]
})
export class RoadmapComponent implements OnInit {

  
  public visibility : any = [
    {'value':false},
    {'value':false},
    {'value':false},
    {'value':false},
    {'value':false},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public setVisible(i:number){
    this.visibility[i].value = !this.visibility[i].value
  }

}
