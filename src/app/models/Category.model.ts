export class Category {
  constructor(
    public name:string,
    public href:string,
    public subCategories?:Category[],
    public promoImg?:string,
    public promoText?:string
  ){}
}
