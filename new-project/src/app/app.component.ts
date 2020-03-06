import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-project';
  constructor(private http: Http) { }
  searchparam = 2;
  jsondata;
  name;
  constructor(private http: Http)
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    
    "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
       }
    },
    
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
    }
  } 
  ngOnInit() {
     this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam).
     map(
        (response) ⇒ response.json()
     ).
     subscribe((data) ⇒ this.converttoarray(data))
  }
  converttoarray(data) {
     console.log(data);
     this.name = data[0].name;
  }
}