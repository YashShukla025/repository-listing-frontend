import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from './../../data.service';
// import {UserData} from './../../model/userdata';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent {
  constructor(private httpClient: HttpClient,public dataService: DataService){}
  userdata:any = {};

repos = [
  {'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
{'name':"IoT",
'description':"This is a repository",
'topics':["Javascript", "c","C++", "Java", "Python",],
},
];
repoData:any = [];


// getGitProfile(){
// //   this.httpClient.get('http://localhost:8888/git/userinfo/Yashshukla025').subscribe((res)=>{
// //       console.log(res);
// // this.userData = res;
// //   });
// }

ngOnInit() {
   this.dataService.getGitProfile().subscribe((data: {}) => {
    this.userdata = data;
  });
  this.dataService.getRepositories().subscribe((data: {}) => {
    this.repoData = data;});
}
}
