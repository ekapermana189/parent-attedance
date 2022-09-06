import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.page.html',
  styleUrls: ['./search-history.page.scss'],
})
export class SearchHistoryPage implements OnInit {
  term;
  constructor() { }

  ngOnInit() {
  }

  items= [{ name: "archie" }, { name: "jake" }, { name: "richard" }];

}
