import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { cars } from './cars';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http :HttpClient) { }


  url: string = "http://localhost:3000/cars";
  getCars(){
    return this.http.get<cars[]>(this.url);
  }
}
