import {Category} from "./../models/Category.model.ts";

const categoryNames:string[] = ["Jewelry & Accessories", "Clothing & Shoes", "Home & Living", "Wedding & Party", "Toys & Entertainment", "Art & Collectibles", "Craft Supplies"];
const imageNames:string[] = ["jewelry", "women", "home", "wedding", "games", "art", "crafts"];


const output:Category[] = [];

categoryNames.forEach((name, index) => {
  output.push(new Category(name, '#', null, imageNames[index] + '.jpg'));
});

export const mainCategories:Category[] = output;
