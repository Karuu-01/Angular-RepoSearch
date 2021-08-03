import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  username!: string;
  repoName!: string;
  clientId: string = "8a4995dcdb086e8e71b1";
  clientSecret: string = "213ca1a662da11ebaef2d71e21fda83b6a644dc4";
  apikey:string='be05ad82ef1dec303061648a172836e81613bc78';
  constructor(private http: HttpClient) { 
    console.log('service is now ready');
  }

  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }
  
}
