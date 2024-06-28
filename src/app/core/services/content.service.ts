import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontent } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http : HttpClient) { }

  createpost(posData : Icontent , file : File ){

    const formData = new FormData();
    formData.append('title', posData.title);
    formData.append('description', posData.description);
    formData.append('midea', file, file.name);

    return this.http.post('/content/create' , formData)
  }

  getpost (Id=''){
    console.log(Id);
    
    return this.http.get('/content/get',{params : {id : Id}})
  }

}
