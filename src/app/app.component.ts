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
  data = "";
handleResults(srch: string) {
throw new Error('Method not implemented.');
this.data = srch;
}
  
        
        private gitProfileObservable : Observable<any> ; 

        constructor(private dataService: DataService){

            this.gitProfileObservable = this.dataService.getGitProfile("jlasss");

              
        }
        
}
