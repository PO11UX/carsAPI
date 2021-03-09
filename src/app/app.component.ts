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






// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
// fetch("https://car-stockpile.p.rapidapi.com/base-trim?make=Audi&model=RS4%20Avant&year=2019", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "d77b8d894bmsh2a658fadb47598cp198f94jsn561cc8644d20",
// 		"x-rapidapi-host": "car-stockpile.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });