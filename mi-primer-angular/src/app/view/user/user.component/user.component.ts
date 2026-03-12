import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../../services/user.service/user.service';

@Component({
  selector: 'app-user.component',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  user: any[] = [];

  constructor(private userServi: UserService, private cdr: ChangeDetectorRef){
     this.userServi.getUsers().subscribe(data =>{
      this.user = data;
      console.log(this.user);
      this.cdr.detectChanges();      
     });
  }
  
  
  
}
