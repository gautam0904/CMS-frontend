import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontent } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  createpost(postData: Icontent, file: File) {

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('description', postData.description);
    formData.append('midea', file, file.name);

    return this.http.post('/content/create', formData)
  }

  getpost(Id = '') {
    return this.http.get('/content/get', { params: { id: Id } })
  }

  deletePost(id: string) {
    return this.http.delete('/content/delete', { params: { id: id } })
  }

  updatePost(postData : Icontent , file : File ){
    let formData;
    if (file) {
      formData = new FormData();
    formData.append('title', postData.title);
    formData.append('description', postData.description);
    formData.append('midea', file, file?.name);
    }else{
      formData = postData
    }
    return this.http.put('/content/update' , formData)
  }

}
