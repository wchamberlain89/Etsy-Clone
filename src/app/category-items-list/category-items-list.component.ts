import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-items-list',
  templateUrl: './category-items-list.component.html',
  styleUrls: ['./category-items-list.component.scss']
})
export class CategoryItemsListComponent implements OnInit {
  @Input() category:Category;
  
  constructor() { }

  ngOnInit() {
  }

}
