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
    display=[];
    newCar:any;
    editing=false;
    id: number;
    cars:cars[]=[];
    userModel= new cars('','','', false ,false ,false ,false ,false ,false ,false ,false ,false);
    editingCar=new cars('','','', false ,false ,false ,false ,false ,false ,false ,false ,false);
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
      console.log(this.modal[0].classList);
      // this.modal.classList.remove('hideModal');
      this.modal[0].classList.remove('hideModal')
      console.log(this.modal[0].classList);
    }
    close(event){
      this.modal[0].classList.add('hideModal');
    }
    
    onSubmit(event){

      if(!this.editing){
        if(event.target.classList.contains("ng-valid")){
          this.modal[0].classList.add('hideModal');
          this.editingCar=this.userModel;
          localStorage.setItem('editingCar', JSON.stringify(this.editingCar));
          this.editingCar = JSON.parse(localStorage.getItem('editingCar'));
          this.addCars(this.editingCar);
          
        }
      }
      else{
        if(event.target.classList.contains("ng-valid")){
        this.modal[0].classList.add('hideModal');
        this.editingCar=this.userModel;
        localStorage.setItem('editingCar', JSON.stringify(this.editingCar));
        this.myCars[this.id] = JSON.parse(localStorage.getItem('editingCar'));;
        localStorage.setItem('cars', JSON.stringify(this.myCars));
        this.myCars = JSON.parse(localStorage.getItem('cars'));
        this.editing=false;
        }
      }
    }

    edit(event){
      this.id = event.target.id;
      this.editing=true;
      
      this.editingCar=this.myCars[this.id];
      
      this.modal[0].classList.remove('hideModal')
    
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


    detals(event){

      this.display.push(this.myCars[event.target.id]);
    
     while(this.display.length>1){
       this.display.shift();
       
      }
    console.log(this.myCars[event.target.id])
  //  console.log(this.cars[event.target.id]);
    }
    details(event){
       this.display.push(this.cars[event.target.id]);
      console.log(this.cars[event.target.id]);
      while(this.display.length>1){
        this.display.shift();
        
       }
    }
    

  }