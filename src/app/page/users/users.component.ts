import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users !: IUser[];

  constructor(private user : AuthService) {}

  ngOnInit(): void {
    this.user.getAllusers().subscribe({
      next : (responseData: any) =>{
        this.users = responseData.data as IUser[];
      }
    });
  }
}
