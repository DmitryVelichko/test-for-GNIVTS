const _ = require("lodash");

const axios = require("axios");

type Meals = {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: any;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
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
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strSource: string;
  strImageSource: any;
  strCreativeCommonsConfirmed: any;
  dateModified: any;
};

const fetchDataFromMealAPI = async () => {
  const res = await axios(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=y"
  );

  const data = res.data.meals;

  const categories: Meals[] = _.reduce(
    data,
    (acc: string[], cur: Meals) => {
      acc.push(cur.strCategory);
      return acc;
    },
    []
  );

  const listOfCategories = _.uniq([...categories])
    .sort()
    .join(", ");
};

fetchDataFromMealAPI();
