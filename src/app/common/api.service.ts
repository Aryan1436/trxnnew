import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod,Request } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Observable } from "rxjs/Observable";
import { parseString } from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
http:any;
public token:string="ad82f2797d39f4b3722702bb7cbdd568";
private url:any='https://api.themoviedb.org/3/';
  constructor(http:Http) { 
    this.http=http;
  }
getToken(){
  return this.http.get(this.url+"authentication/token/new?api_key="+this.token).map(data => {
    
    return data;
    
    
    
});
}
  masterSearch(url){
    
    
    
    console.log(this.url+url);
    
    return this.http.get(this.url+url).map(data => {
      
      return data._body;
      
      
      
});
}
}
