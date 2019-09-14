import * as apiModel from 'pods/recipes/api/recipes.api-model';
import * as vm from 'pods/recipes/recipes.view-model';
import { mapRecipeFromApiToVm } from 'pods/recipes/recipes.mappers';
import { mockRecipes } from '../../../__mocks__/recipes.mock-data';

describe('recipes mapper specs', () => {
  describe('mapper recipes to vm', () => {
    it('Recipe is undefined', () => {
        // Arrange
        const recipe: apiModel.Recipe = undefined;
        const emptyRecipe: apiModel.Recipe = vm.createEmptyRecipe();
  
        // Act
        const result = mapRecipeFromApiToVm(recipe);
  
        // Assert
        expect(result).toEqual(emptyRecipe);
      });

      it('There is a recipe', () => {
        // Arrange
        const recipe: apiModel.Recipe = mockRecipes[0];
  
        // Act
        const result = mapRecipeFromApiToVm(recipe);
  
        // Assert
        expect(result).toEqual(recipe);
      });
  });
});
