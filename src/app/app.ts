import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  time = '02:00:00'
  dlgbox:any=false



  toggle(){
    this.dlgbox=!this.dlgbox
    console.log('d')
  }
//  setnum(val:any){
//   const cstmTime = this.time.slice(2,this.time.length)
//    val = String(val)
//   // const res = val(String) + this.time
//   console.log(val+ cstmTime)
//   this.time= val+cstmTime
//   console.log(this.time)
//   console.log('dd')
//  }

}
