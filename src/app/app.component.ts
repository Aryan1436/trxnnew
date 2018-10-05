import { Component } from '@angular/core';
import {ApiService} from '../app/common/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected_movie: any='';
  movies: any = [];
  movie: string;
  title = 'trxn';
  constructor(private api:ApiService){

    this.getMovies("titanic");
  }
//   getMovies(name:any){
//     this.movie=name;
//     this.api.getToken().subscribe(data=>{
      
//      let  data2=data._body;
//      data2=JSON.parse(data2);    
// if(data2.success==true){
  
// this.getCall(data2.request_token);
// }
//     });
   
//   }

  getMovies(name){
    // console.log(name);
    let arr=[];
    arr['api_key']=this.api.token;
    arr['query']=name;
    arr['language']="en-US";
    arr['include_adult']=false;
    // arr['query']="";
    let req="search/movie?api_key="+arr['api_key']+"&"+"query="+arr['query']+"&language=en-US&page=1&include_adult=false";
    this.api.masterSearch(req).subscribe(data=>{
      let dt=JSON.parse(data);
      this.movies=dt.results;
    });
  }
  getMovieDetails(id){
    let req="movie/"+id+"?api_key="+this.api.token+"&language=en-US";
    this.api.masterSearch(req).subscribe(data=>{
      let dt=JSON.parse(data);
      this.selected_movie=dt;
      console.log(this.selected_movie.budget);
    });
  }
  getProductionCompanies(data){
    return data.production_companies;
  }

}
