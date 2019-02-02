import * as ShoppinListActions from './shopping-list.actions';
import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = "ADD_INGREDIENT";

const initialState = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	]
};

export function shoppinListReducer(state = initialState, action: ShoppinListActions.ShoppingListActions) {
	switch (action.type) {
		case ShoppinListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			};
			
			default:
				return state;
	}
}