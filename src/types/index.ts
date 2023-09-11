import { store } from "../app/store";

export type RelatedDrinksProps = {
  relatedDrinks: Cocktail[]
}

export type StoreState = ReturnType<typeof store.getState>;

export type CocktailsContainerProps = {
  cocktailsList: Cocktail[];
};

export type Cocktail = {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strGlass: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
};

export type AppContextProps = {
  searchCocktail(text: string): void;
  changeUrl(e: Partial<SubmitEvent>): void;
};

export type Status = "success" | "error" | "loading" | "idle";

export type FilterState = {
  status: Status;
  categories: Category[];
  alcoholic: Alcoholic[];
  glasses: Glass[];
  ingredients: Ingredient[];
};

export type Category = {
  strCategory: string;
};
export type Alcoholic = {
  strAlcoholic: string;
};
export type Glass = {
  strGlass: string;
};
export type Ingredient = {
  strIngredient1: string;
};

export type FilterInterfaceProps = {
  closeFilterInterface(): void;
};

export type CategoriesProps = {
  status: Status;

  categories: Category[];
};
export type AlcoholicProps = {
  status: Status;

  alcoholic: Alcoholic[];
};
export type GlassesProps = {
  status: Status;

  glasses: Glass[];
};
export type IngredientsProps = {
  status: Status;
  ingredients: Ingredient[];
};
