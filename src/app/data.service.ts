import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import {UserData} from './model/userdata';
    import {RepoData} from './model/repoData';
    import { Observable, throwError } from 'rxjs';

    @Injectable({
        providedIn: 'root'
    })
    export class DataService {
      
    

    constructor(private httpClient : HttpClient) {}

    getGitProfile(username:any): Observable<UserData>{
      return this.httpClient.get<UserData>('http://localhost:8888/git/userinfo/'+username);
    }

    getRepositories(): Observable<RepoData>{
      return this.httpClient.get<RepoData>('http://localhost:8888/git/getAllRepos/Yashshukla025/');
    }

    }