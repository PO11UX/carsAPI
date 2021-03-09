import { Component, OnInit } from '@angular/core';
import { cars } from './cars';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'carShop';
  constructor(private rs : RestService){}
  column = ["people ID","name",'desc','ABS','elG','look','Bluetooth','Alarm','park','GPS','comp','mult'];
  index = ["id", 'name','desc','ABS','elG','look','Bluetooth','Alarm','park','GPS','comp','mult'];

  cars:cars[]=[] ;

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

}




