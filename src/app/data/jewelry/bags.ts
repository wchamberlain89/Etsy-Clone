import {Category} from "./../../models/Category.model";

const names:string[] = ["Backpacks", "Handbags", "Diaper Bags", "Luggage & Duffel Bags", "Phone Cases"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#'));
});

export const bagCategories:Category[] = output;
