import { Component, OnInit } from '@angular/core';
import { mainCategories } from '../data/main-categories';
import { Category } from '../models/Category.model'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent implements OnInit {

  mainCategories:Category[] = mainCategories;


  ngOnInit() {
  }

  constructor() { }




}
