import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PracticaService {

  constructor(private http: HttpClient){

  }

  getPractica(){
    return this.http.get<any>('https://randomuser.me/api/?results=10'); 
  }
  
}
