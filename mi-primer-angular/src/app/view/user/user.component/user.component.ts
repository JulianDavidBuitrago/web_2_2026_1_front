import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../../services/user.service/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../../models/user.model/user.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user.component',
  imports: [ AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  /* user: any[] = []; */
  users$: Observable<UserModel[]>;

  constructor(private userServi: UserService, private cdr: ChangeDetectorRef){
    this.users$ =this.userServi.getUsers();
     /* this.userServi.getUsers().subscribe(data =>{
      this.user = data;
      console.log(this.user);
      this.cdr.detectChanges();      
     }); */
  }

   /*ngOnInit(){
    this.userServi.getUsers().subscribe(data =>{
      console.log('Usuarios', data);
      
    }); 
    this.users$ =this.userServi.getUsers();
    //console.log('Usuarios', this.users$);
    
    this.cdr.detectChanges();
  }*/
  
  
  
}
