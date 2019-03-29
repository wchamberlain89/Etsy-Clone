import {Category} from "./../../models/Category.model";
import {accessoryCategories} from "./accessories";

const names:string[] = ["Accessories", "Bags & Purses", "Necklaces", "Rings", "Earrings", "Bracelets", "Body Jewelry"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#'));
});

output[0].subCategories = accessoryCategories;

export const jewelryCategories:Category[] = output;
