import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  documents(){
    return this.http.get('https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106');
  }

  genders(){
    return this.http.get('https://api.bancoink.biz/qa/signup/genders?apiKey=030106');
  }

}
