import {SearchRequestService} from '../search-http/search-request.service'
import { Component, OnInit } from '@angular/core';
import {Search} from '../search-Class/search';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers:[SearchRequestService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search:Search;
  userName:"";
  submit(){
    this.searchService.searchRequest(this.userName)
  }
  constructor(private searchService:SearchRequestService) { 
   
  }

  
  ngOnInit() {
    this.searchService.searchRequest("ugiriwabo")
    this.search=this.searchService.search
  }
}
