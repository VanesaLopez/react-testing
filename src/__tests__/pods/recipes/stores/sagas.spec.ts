import { watchRecipesPodSagas, getRecipesRequestSaga } from 'pods/recipes/store';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTypes } from 'pods/recipes/store/action-types';
import * as api from 'pods/recipes/api';
import { updateRecipes } from 'pods/recipes/store';
import { Recipe } from 'pods/recipes/recipes.view-model';

describe('tests sagas', () => {
  describe('watchRecipesPodSagas', () => {
    it('should wait for action of type GET_RECIPES_REQUEST and execute the expected worker', () => {
      // Arrange
      const saga = watchRecipesPodSagas();
      const expectedResult = takeLatest(actionTypes.GET_RECIPES_REQUEST, getRecipesRequestSaga);

      // Act
      const result = saga.next();

      // Assert
      expect(result.value).toEqual(expectedResult);
    });
  });

  describe('getRecipesRequestSaga', () => {
    it('should call getRecipes', () => {
      // Arrange
      const saga = getRecipesRequestSaga();
      const recipes: Recipe[] = [
        { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
        { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
        ];
      // Act & Assert
      expect(saga.next().value).toEqual(call(api.getRecipes));
      expect(saga.next(recipes).value).toEqual(put(updateRecipes(recipes)));
    });
});
});