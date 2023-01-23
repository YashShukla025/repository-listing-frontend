import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from './../../data.service';
// import {UserData} from './../../model/userdata';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css']
})
export class GitProfileComponent {
  constructor(public dataService: DataService){}
  userdata:any = {};
  title:any = "";
  @Input() public usrname2 :any = "";

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



ngOnInit() {
  
   this.dataService.getGitProfile("Yashshukla025").subscribe((data: {}) => {
    this.userdata = data;
  });
  this.dataService.getRepositories().subscribe((data: {}) => {
    console.log(data);
    this.repoData = data;});
}

}
