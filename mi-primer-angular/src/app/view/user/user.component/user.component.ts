import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-user.component',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  user: any[] = [];
  exampleApi: any = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
    this.getUsers();
    this.getExampleApi();
  }
  getUsers(){

     this.http.get<any[]>('users.json').subscribe(data => {
      this.user = data;
      /* console.log(this.user); */    
      this.cdr.detectChanges();  
    }); 
  }
  
  getExampleApi(){
    this.http.get<any>('https://randomuser.me/api/').subscribe(data => {
     this.exampleApi = data.results;
     console.log(this.exampleApi);    
     this.cdr.detectChanges();  
   }); 

  }
}
