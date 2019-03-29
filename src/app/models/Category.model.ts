export class Category {
  constructor(
    public name:string,
    public href:string,
    public subCategories?:Category[] | void,
    public promoImg?:string,
    public promoText?:string
  ){}
}
