import * as api from 'pods/recipes/api';
import { getRecipesVMSelector } from 'pods/recipes/selectors';

describe('Tests Selectors', () => {
    it('Get Recipes VM selector', () => {
        // Arrange
        const recipes: api.Recipe[] = [
            { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
            { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
        ];

        // Act
        const selected = getRecipesVMSelector.resultFunc(recipes);

        // Assert
        expect(selected).toEqual(recipes);
    });
});