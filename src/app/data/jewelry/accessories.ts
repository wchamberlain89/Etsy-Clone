import {Category} from "./../../models/Category.model";

const names:string[] = ["Hats & Caps", "Hair Accessories", "Sunglasses & Eyewear", "Scarves & Wraps", "Belts & Suspenders", "Keychains & Lanyards", "Umbrellas & Rain Accessories"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#'));
});

export const accessoryCategories:Category[] = output;
