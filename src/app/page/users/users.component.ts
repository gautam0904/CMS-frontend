import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users !: IUser[];
  updated!: boolean;
  currentUser!: IUser

  constructor(private user: AuthService) { }

  ngOnInit(): void {
    this.user.getAllusers().subscribe({
      next: (responseData: any) => {
        this.users = responseData.data as IUser[];
      }
    });
    this.currentUser = JSON.parse(localStorage.getItem('user') as string)
  }

  edit(user: IUser) {
    this.updated = true;
    // this.ud.setData(post)
  }

  delete(user: IUser) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be delete this User!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.user.deleteUser(user._id).subscribe({
          next: () => {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
            this.ngOnInit()
          },
          error: (err : any) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.error.message,
            })
          }
        })

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "This User is safe :)",
          icon: "error"
        });
      }
    });

  }

}
