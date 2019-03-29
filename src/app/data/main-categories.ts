import {Category} from "./../models/Category.model";
import {jewelryCategories} from "./jewelry/jewelry";

const names:string[] = ["Jewelry & Accessories", "Clothing & Shoes", "Home & Living", "Wedding & Party", "Toys & Entertainment", "Art & Collectibles", "Craft Supplies"];
const images:string[] = ["jewelry", "women", "home", "wedding", "games", "art", "crafts"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#', null, images[index] + '.jpg'));
});

output[0].subCategories = jewelryCategories;

export const mainCategories:Category[] = output;
