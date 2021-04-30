import { HttpClient } from "@angular/common/http";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div ngIf=*data>
  <h1>{{data.titlesnormalaized}}</h1>
  <span>{{data.description}}</span>
</div>`,

  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
  data:any;

  constructor(privat http: HttpClient){
    http.get ("https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi")
    .subscribe(response => [
      console.log (response);
      this.data = response;
    ]);
    @input
  }
}

