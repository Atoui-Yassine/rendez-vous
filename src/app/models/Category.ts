import { Img } from "./Img";

export interface Category{

  id: number;
  name: string;
  parent: Category;
  childCategories: Category[];
  image: Img;
}
