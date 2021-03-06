import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTER} from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMEALS: [],
};

const mealsReducer = (state = initialState, action) => {
  console.log('state', state, action);
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMEALS.findIndex(
        meal => meal.id === action.mealId,
      );
      console.log('existingIndex here  ', existingIndex);
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMEALS];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMEALS: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMEALS: state.favoriteMEALS.concat(meal)};
      }

    case SET_FILTER:
      const appliedFilters = action.filters;
      const updatedfFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedfFilteredMeals};
    default:
      return state;
  }
};

export default mealsReducer;
