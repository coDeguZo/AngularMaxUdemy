import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secret:boolean = false
  clicks: number[] = []

  pushClicks() {
    return this.clicks.push(this.clicks.length + 1)
  }
}
