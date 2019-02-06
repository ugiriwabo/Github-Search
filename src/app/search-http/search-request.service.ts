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
    this.search= new Search ("","",0,0,0,"")
  }

  searchRequest(){
    interface ApiResponse{
      avatar_url:string;
      name:string;
      public_repos:number;
      followers:number;
      following:number;
      html_url:string
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apikey).toPromise().then(response=>{
      this.search.avatar_url=response.avatar_url
      this.search.name=response.name
      this.search.public_repos=response.public_repos
      this.search.followers=response.followers
      this.search.following=response.following
      this.search.html_url=response.html_url

      resolve()
    },
    error=>{
      this.search.avatar_url="Never, never, never give up."
      this.search.name="winston churchill"
      // this.search.name="winston churchill"
      // this.search.name="winston churchill"
      // this.search.name="winston churchill"
      // this.search.name="winston churchill"
      reject(error)
    })
  })

  return promise
 }
}
