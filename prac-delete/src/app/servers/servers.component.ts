import { Component } from "@angular/core"

@Component({
  selector: 'app-servers',
  styleUrls: ['./servers.component.css'],
  templateUrl: './servers.component.html'
})
export class ServersComponent{
  counter:number = 0
  username:string = "Uzoma Ariguzo"
  allowButton:boolean = false

  constructor(){
    setTimeout(() => {
      this.allowButton = true
    }, 2000)
  }

  handleIncrement(){
    this.counter = this.counter + 1
  }

  handleInputChange(event: Event){
    this.username = (<HTMLInputElement>event.target).value
  }
}