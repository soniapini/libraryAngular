import { CategoryType } from "./category-type";

export interface Category {
  id?: number;
  description: string;
  type: CategoryType;
}
