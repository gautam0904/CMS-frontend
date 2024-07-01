import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UpdateContentService {

  constructor() { }

  dynamicForm : any = undefined;

  profileForm : IUser | undefined = undefined;

  getProfileForm(){
    return this.profileForm;
  }

  setprofileData(profile : IUser){
    this.profileForm = profile
  }

  deleteprofiledata(){
    this.profileForm = undefined; 
  }

  getData(){
    return this.dynamicForm;
  }

  setData(data : any){
    this.dynamicForm = data;   
  }

  deleteData(){
    this.dynamicForm = undefined; 
  }
}
