import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/Category.model'

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  @Input() category:Category

  constructor() { }

  ngOnInit() {
  }

}
