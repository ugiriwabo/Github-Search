import {SearchRequestService} from '../search-http/search-request.service'
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{environment} from '../../environments/environment';
import {Search} from '../search-Class/search';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[SearchRequestService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search:Search;
  constructor(private http:HttpClient,private quoteService:SearchRequestService) { 
    this.search= new Search ("","",0,0,0,"")
  }
  
  ngOnInit() {
    // this.searchService.searchRequest()
    // this.search=this.searchService.search
    interface ApiResponse{
      avatar_url:string;
      name:string;
      public_repos:number;
      followers:number;
      following:number;
      html_url:string
    }
    this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token'+environment.apikey).subscribe(data=>{
     this.search= new Search(data.avatar_url, data.name, data.public_repos, data.followers, data.following, data.html_url)  
    })
  }
}
