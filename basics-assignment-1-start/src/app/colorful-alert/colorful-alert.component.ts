import { Component } from '@angular/core'

@Component({
  selector: 'app-colorful-alert',
  templateUrl: './colorful-alert.component.html',
  styleUrls: ['./colorful-alert.component.css']
})
export class ColorfulAlertComponent{
  colorTitle:string = "Colorful Component"

  handleMouseEnter(){
    alert("Hovered Over Colorful Button")
  }
}