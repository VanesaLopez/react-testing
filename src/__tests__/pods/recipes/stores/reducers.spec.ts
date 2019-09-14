import deepFreeze from 'deep-freeze';
import { BaseAction } from 'common/types';
import { recipesPodReducer, RecipesPodState } from 'pods/recipes';

describe('tests reducer', () => {
  it('should return the expected initial state when passing state as undefined', () => {
    // Arrange
    const action: BaseAction = {
      type: 'INIT',
      payload: null,
    };

    // Act
    const result = recipesPodReducer(undefined, action);

    // Assert
    expect(result.recipes).toEqual([]);
  });

  it('should return the given state if action type is unknown', () => {
    // Arrange
    const state: RecipesPodState = {
      recipes: []
    };

    deepFreeze(state);

    const action: BaseAction = {
      type: 'test action',
      payload: null,
    };

    // Act
    const result = recipesPodReducer(state, action);

    // Assert
    expect(result).toBe(state);
  });
});
