import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginData: IUser) {
    return this.http.post('/user/login', {
      "email": loginData.email,
      "password": loginData.password
    })
  }

  signup(signupData: IUser, imageFile: File) {
    console.log(signupData.name);

    const formData = new FormData();
    formData.append('name', signupData.name);
    formData.append('email', signupData.email);
    formData.append('password', signupData.password);
    formData.append('role', signupData.role);
    formData.append('profilePicture', imageFile, imageFile.name);

    return this.http.post('/user/signup', formData)
  }

  getAllusers() {
    return this.http.get('/user/getById')
  }

  updateProfile(profileData: IUser, imageFile: File | null = null) {
    let formData
    if (imageFile) {
      formData = new FormData();
      formData.append('_id', profileData._id);
      formData.append('name', profileData.name);
      formData.append('role', profileData.role);
      formData.append('profilePicture', imageFile, imageFile.name);
    }
    else {
      formData = profileData
    }
    return this.http.put('/user/update', formData)
  }

  deleteUser(id: string) {
    return this.http.delete('/user/delete', { body: { userId: id } })
  }

}
