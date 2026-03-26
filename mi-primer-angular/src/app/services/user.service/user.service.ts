import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient){

  }
  /* getUsers(){
    return this.http.get<any[]>('users.json'); 
  } */
  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('/users.json');
  }
}
