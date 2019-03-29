import { Component, OnInit } from '@angular/core';
import { mainCategories } from '../data/main-categories';
import { Category } from '../models/Category.model'

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})

export class MenubarComponent implements OnInit {

  mainCategories:Category[] = [];


  ngOnInit() {
    const categoryNames:string[] = ["Jewelry & Accessories", "Clothing & Shoes", "Home & Living", "Wedding & Party", "Toys & Entertainment", "Art & Collectibles", "Craft Supplies"];
    const imageNames:string[] = ["jewelry", "women", "home", "wedding", "games", "art", "crafts"];

    categoryNames.forEach((name, index) => {
      this.mainCategories.push(new Category({
        name : name,
        href : "#",
        promoImg: imageNames[index]
      }));
    });
  }

  constructor() { }




}
