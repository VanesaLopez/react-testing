import * as api from 'pods/recipes/api';
import { actionTypes } from 'pods/recipes/store/action-types';
import {getRecipesRequest, updateRecipes} from 'pods/recipes/store';

describe('test actions', () => {
    it('Get Recipes', () => {
        // Act
        const result = getRecipesRequest();

        // Assert
        expect(result.type).toEqual(actionTypes.GET_RECIPES_REQUEST);
    });

    it('Get Recipes', () => {
        // Arrange
        const recipes: api.Recipe[] = [
            { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
            { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
        ];

        // Act
        const result = updateRecipes(recipes);

        // Assert
        expect(result.type).toEqual(actionTypes.UPDATE_RECIPES);
        expect(result.payload).toEqual(recipes);
    });
});