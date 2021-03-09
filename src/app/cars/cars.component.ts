import { Component, OnInit, ɵresetJitOptions } from '@angular/core';
//import { monitorEventLoopDelay } from 'node:perf_hooks';
import { cars } from '../cars';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
    Cars=['Audi','BMW','Mercedes','Toyota','Mitsubishi']
    modal=document.getElementsByClassName("modal");
    carType=document.getElementsByClassName('e')
    title = 'carShop';
    constructor(private rs : RestService){}
    index = ['name'];//,'id','desc','ABS','elG','look','Bluetooth','Alarm','park','GPS','comp','mult'];
    myCars=[];
    newCar:object;
    cars:cars[]=[] ;
    userModel= new cars('','','','', false ,false ,false ,false ,false ,false ,false ,false ,false );
    ngOnInit(): void{
      this.rs.getCars().subscribe(
        (response)=>{
          this.cars=response;
         
        }
      ),
      (error)=>{
        console.log('error'+error);
        
      }
      
    }
    
     addCar(event) {
      // this.modal.classList.remove('hideModal');
      this.modal[0].classList.remove('hideModal')
      console.log(this.modal);
    }
    close(event){
      this.modal[0].classList.add('hideModal');
    }
    see(event){
      this.modal[0].classList.add('hideModal');
      this.newCar=this.userModel
      console.log(this.newCar)
      console.log(this.myCars);
      this.myCars.push(this.newCar);
      // if(this.Cars[1]=== ){
        
      //   console.log(this.carType);
      // }
    }
  }
