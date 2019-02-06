import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{environment} from '../../environments/environment';
import {Search} from '../search-Class/search';

@Injectable({
  providedIn: 'root'
})

export class SearchRequestService {

  search:Search;

  constructor(private http:HttpClient) { 
    this.search= new Search ("","",0,0,0,"",new Date())
  }

  searchRequest(user){
    var userInput=user
    interface ApiResponse{
      avatar_url:string;
      name:string;
      public_repos:number;
      followers:number;
      following:number;
      html_url:string;
      completeDate:Date
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+ userInput + "?access_token=4ffdfc5f0f8eed2003c5a2d95e5a4f9b01d39f08").toPromise().then (response=>{
      this.search.avatar_url=response.avatar_url
      this.search.name=response.name
      this.search.public_repos=response.public_repos
      this.search.followers=response.followers
      this.search.following=response.following
      this.search.html_url=response.html_url
      resolve()
    },
    error=>{
      this.search.avatar_url=""
      this.search.name=""
      this.search.public_repos=0
      this.search.followers=0
      this.search.following=0
      this.search.html_url=""
      this.search.completeDate=new Date()
      reject(error)
    })
  })

  return promise
 }
}
