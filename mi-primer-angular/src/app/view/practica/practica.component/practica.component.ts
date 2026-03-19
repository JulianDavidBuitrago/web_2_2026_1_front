import { ChangeDetectorRef, Component } from '@angular/core';
import { PracticaService } from '../../../services/practica.service/practica.service';
import { UserService } from '../../../services/user.service/user.service';

@Component({
  selector: 'app-practica.component',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class PracticaComponent {
  exampleApi: any = [];
  user: any[] = [];

  constructor(private usrPractica: PracticaService,/* private usr: UserService, */ private cdr: ChangeDetectorRef){
    this.usrPractica.getPractica().subscribe(data =>{
      this.exampleApi = data.results;
      console.log(this.exampleApi);
      this.cdr.detectChanges();
    });
    /* this.usr.getUsers().subscribe(data =>{
      this.user = data;
      console.log(this.user);
      this.cdr.detectChanges();
    }); */
  }

  /* getExampleApi(){
    /* this.http.get<any>('https://randomuser.me/api/?results=5').subscribe(data => { 
    this.http.get<any>('https://randomuser.me/api/?results=10').subscribe(data => {
     this.exampleApi = data.results;
     console.log(this.exampleApi);    
     this.cdr.detectChanges();  
   }); 

  } */

}
