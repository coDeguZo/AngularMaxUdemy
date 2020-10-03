import { Component } from '@angular/core'


@Component({
  selector: "app-neutral-alert",
  templateUrl: './neutral-alert.component.html',
  styles: [`
    h1 {
      color: grey;
    }
  `]
})
export class NeutralAlertComponent{
  title: string =  "Neutral Alert Component"
}