import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-practica.component',
  imports: [],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class PracticaComponent {
  exampleApi: any = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef){
    
    this.getExampleApi();
  }

  getExampleApi(){
    /* this.http.get<any>('https://randomuser.me/api/?results=5').subscribe(data => { */
    this.http.get<any>('https://randomuser.me/api/?results=10').subscribe(data => {
     this.exampleApi = data.results;
     console.log(this.exampleApi);    
     this.cdr.detectChanges();  
   }); 

  }

}
