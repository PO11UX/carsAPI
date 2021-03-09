import { Component, OnInit, ɵresetJitOptions } from '@angular/core';
import { from } from 'rxjs';
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
    //index = ['name'];//,'id','desc','ABS','elG','look','Bluetooth','Alarm','park','GPS','comp','mult'];
    myCars=[];
    newCar:any;
    cars:cars[]=[] ;
    userModel= new cars('','','', false ,false ,false ,false ,false ,false ,false ,false ,false );
    ngOnInit(): void{
      this.rs.getCars().subscribe(
        (response)=>{
          this.cars=response;
         
        }
      ),
      (error)=>{
        console.log('error'+error);
        
      }
      this.myCars= JSON.parse(localStorage.getItem('cars'));
    }
    
     addCar(event) {
      // this.modal.classList.remove('hideModal');
      this.modal[0].classList.remove('hideModal')
      console.log(this.modal);
    }
    close(event){
      this.modal[0].classList.add('hideModal');
    }
    
    
    onSubmit(){
      // this.rs.enrole(this.userModel)
      // .subscribe(
      //   data => console.log('success', data),
      //   error => console.error('error',error)
        
      //   )
      // this.newCar=this.userModel;
      // this.myCars.push(this.newCar);
        
        this.addCars(this.userModel);
        this.modal[0].classList.add('hideModal');
       

    }
    addCars(car){
      
      if(localStorage.getItem("cars")){
        this.myCars = JSON.parse(localStorage.getItem("cars"));
        this.myCars = [car, ...this.myCars]
      }else{
        this.myCars=[car]
      }
      localStorage.setItem("cars", JSON.stringify(this.myCars))
    }
    delete(event){
      
      localStorage.removeItem('cars');
      this.myCars.splice(event.target.id,1);
      console.log(this.myCars);
      localStorage.setItem("cars", JSON.stringify(this.myCars))
      console.log();

    }
   
  }
