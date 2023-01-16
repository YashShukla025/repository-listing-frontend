import { Component } from '@angular/core';
import { Observable } from 'rxjs';

    import { DataService } from './data.service';
import { UserData } from './model/userdata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
        
        private gitProfileObservable : Observable<any> ; 

        constructor(private dataService: DataService){

            this.gitProfileObservable = this.dataService.getGitProfile("jlasss");

              
        }
}
