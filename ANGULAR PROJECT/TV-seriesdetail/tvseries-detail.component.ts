import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvseries-detail',
  template: `
    <p>
      tvseries-detail works!
    </p>
    <h3> This tvseries aired from {{aired}}</h3>
  `,
  styles: [
  ]
})
export class TvseriesDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
public aired:any;

 
  ngOnInit(): void {
	let aired = this.route.snapshot.paramMap.get('aired');
	
	
 this.aired= aired;
 
 

  }

}
