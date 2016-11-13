import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
        <p>{{hello}}</p>
`,

})
export class HeaderComponent implements OnInit {

  public hello:any = 'headerComponent';
  constructor() { }

  ngOnInit() {
  }

}
