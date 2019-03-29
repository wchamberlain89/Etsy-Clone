import {Category} from "./../../models/Category.model.ts";

const names:string[] = ["Accessories", "Bags & Purses", "Necklaces", "Rings", "Earrings", "Bracelets", "Body Jewelry"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#'));
});

export const jewelryCategories:Category[] = output;
