const categoryNames:string[] = ["Jewelry & Accessories", "Clothing & Shoes", "Home & Living", "Wedding & Party", "Toys & Entertainment", "Art & Collectibles", "Craft Supplies"];
const imageNames:string[] = ["jewelry", "women", "home", "wedding", "games", "art", "crafts"];


const mainCategories:Category[] = [];

categoryNames.forEach((name, index) => {
  mainCategories.push(new Category({
    name : name,
    href : "#",
    promoImg: imageNames[index];
  }));
});

export mainCategories;
