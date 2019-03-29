export Class Category {
  constructor(
    public name:string;
    public subCategories:[]Category;
    public href:string;
    public img?:string;
    public editorsPick?:string;
  ){}
}
