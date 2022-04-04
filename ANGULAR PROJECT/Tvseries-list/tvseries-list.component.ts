import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvseries-list',
  templateUrl: './tvseries-list.component.html',
  styleUrls: ['./tvseries-list.component.css']
})
export class TVSeriesListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  tvseries = [
 {"aired":1994,"name":"F.R.I.E.N.D.S"},

  {"aired":2005,"name":"How I Met Your Mother"},

  {"aired":2009,"name":"The Vampire Diaries"},

  {"aired":2017,"name":"Money Heist"},
];
public aired:any;
   onSelect(aired:any){

this.router.navigate(['/tvseries',aired.aired]);


}
}


