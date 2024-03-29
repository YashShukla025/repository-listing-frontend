import { Component,Output, EventEmitter } from '@angular/core';
import {DataService} from './../../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  
  show: boolean= false;
  constructor(public dataService: DataService){}
  userdata:any = {};
  username: string = '';
  @Output() public usrname = new EventEmitter<any>();
  checkGitProfile() {
    this.usrname.emit(this.username);
    this.dataService.getGitProfile(this.username).subscribe((data: any) => {
      if(data.message == "Not Found"){
        console.log(this.username);
        alert("User Not Found");
        
      }
      else{
        this.userdata = data;
        console.log(this.userdata);
        
      }
    
  });
  }
}
