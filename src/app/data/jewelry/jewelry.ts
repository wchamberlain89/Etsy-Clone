import {Category} from "./../../models/Category.model";
import {accessoryCategories} from "./accessories";
import {bagCategories} from "./bags.ts";

const names:string[] = ["Accessories", "Bags & Purses", "Necklaces", "Rings", "Earrings", "Bracelets", "Body Jewelry"];

const output:Category[] = [];

names.forEach((name, index) => {
  output.push(new Category(name, '#'));
});

output[0].subCategories = accessoryCategories;
output[1].subCategories = bagCategories;

export const jewelryCategories:Category[] = output;
