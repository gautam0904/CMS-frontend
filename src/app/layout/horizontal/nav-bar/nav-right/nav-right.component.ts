// Angular import
import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
    selector: 'app-nav-right',
    templateUrl: './nav-right.component.html',
    styleUrls: ['./nav-right.component.scss'],
    standalone: false
})
export class NavRightComponent {
    currentUser!: IUser
    firstLatter !:string;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('user') as string)
        this.firstLatter = this.currentUser.name.charAt(0).toUpperCase();
    }
}
