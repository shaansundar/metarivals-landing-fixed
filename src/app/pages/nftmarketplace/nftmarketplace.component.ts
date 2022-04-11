import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nftmarketplace',
  templateUrl: './nftmarketplace.component.html',
  styles: [
  ]
})
export class NftmarketplaceComponent implements OnInit {

  constructor() { }
  public list: number[] = [];
  ngOnInit(): void {
    for(let i=0; i<9; i++){
      this.list.push(i);
    }
  }

}
