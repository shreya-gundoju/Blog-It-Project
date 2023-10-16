import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent {
  constructor(public router:Router){}

}
