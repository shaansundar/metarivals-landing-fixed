import { Component, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'metarivals-landing';
  public loading = true;
  constructor(private window: WindowService){}
  ngOnInit(): void {
    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
      this.loading = false;
    });
  }
}
