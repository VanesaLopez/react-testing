import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Recipe } from 'pods/recipes/recipes.view-model';
import { RecipesPodState, recipesPodReducer } from 'pods/recipes/store/reducers';
import { RecipesContainer } from 'pods/recipes/recipes.container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


fdescribe('Tests Recipes Container', () => {
    it('should render as expected', () => {
        // Arrange
        const initalState: RecipesPodState = {recipes: null};
        const recipes: Recipe[] = [
          { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
          { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
        ];
        initalState.recipes = recipes;

      // Act
      const { asFragment } = renderWithRedux(<RecipesContainer />, {
        initalState,
        reducer: recipesPodReducer,
      });

      // Assert
      // expect(asFragment()).toMatchSnapshot();
    });
  });

  const renderWithRedux = (
    component,
    { initalState = {} , reducer, store = createStore(reducer, initalState) }) => (
      {
        ...render(<Provider store={store}>{component}</Provider>),
        store
      }
    );