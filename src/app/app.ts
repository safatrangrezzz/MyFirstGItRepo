import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  livetime = new Date()
  
  hours = this.livetime.getHours()
  min = this.livetime.getMinutes()
  sec =  this.livetime.getSeconds()
  sthours :string = this.hours.toString().padStart(2,'0')
  stmin :string = this.min.toString().padStart(2,'0')
  stsec :string = this.sec.toString().padStart(2,'0')
  temp:any =''
  
  // constructor(){
  //   console.log(this.sthours,this.stmin,this.stsec)
  //   this.realtime= 
  //   // console.log(typeof this.hours,typeof this.min,typeof this.sec)
  // }
  realtime:any=this.sthours+':'+this.stmin+':'+this.stsec

  add(val:any){
    console.log(this.hours, 'and', this.min,'and', this.sec )
    console.log(this.hours +':'+ this.min)
     this.temp = Number(this.sthours) + Number(val)
    console.log(this.temp,"tempkivl")
    if(this.temp > 24){
     this.temp = '1'.padStart(2,'0');
     console.log('temp ki val 24 se badi hai', typeof this.temp , this.temp)
        
      this.realtime = this.temp+':'+this.stmin+':'+this.stsec
      
      console.log(this.realtime)
    }
    else{
      
      this.realtime =  this.temp+':'+this.stmin+':'+this.stsec
      console.log(this.realtime,'ELSE' )
    }
    
    // this.realtime = vale


  }
   






//   dlgbox:any=false
//  temp:any = ''
//   h2 :any =""


//   realtime = `${this.hours.toString().padStart(2, '0')}:${ this.min.toString().padStart(2, '0')}:${this.sec.toString().padStart(2, '0')}`
  
//   fun(val:any){
//     console.log(typeof val)
//    this.h2 =  this.hours + Number(val)
//    console.log(this.realtime)
//     console.log(this.hours)
    
    
//   }

  

//   toggle(){
//     this.dlgbox=!this.dlgbox
//     console.log('d ng')
//   }
//  setnum(val:any){
//   console.log(this.livetime)
//   console.log('value =',this.realtime)
//   const cstmTime = this.time.slice(2,this.time.length)
//    val = String(val)
//   // const res = val(String) + this.time
//   console.log(val+ cstmTime)
//   this.time= val+cstmTime
//   console.log(this.time)
//   console.log('dd')
//  }

// }

// fun:any = "12:23:45"
// up(val:any){
//   this.fun = val

// }
}