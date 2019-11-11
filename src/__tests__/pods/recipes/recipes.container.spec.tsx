import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Recipe } from 'pods/recipes/recipes.view-model';
import { RecipesPodState, recipesPodReducer } from 'pods/recipes/store/reducers';
import { RecipesContainer } from 'pods/recipes/recipes.container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { State } from 'core/store/root-reducer';
import * as actions from 'pods/recipes/store';


describe('Tests Recipes Container', () => {
  it('should render as expected', () => {
    // Arrange
    const recipes: Recipe[] = [
      { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
      { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
    ];

    const initalState: Partial<State> = {
      recipesPod: {
        recipes,
      },
    };

    // Act
    const { asFragment } = renderWithRedux(<RecipesContainer />, {
      initalState,
      reducer: recipesPodReducer,
    });

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('Table should be 0 elements', () => {
    // Arrange
    const recipes: Recipe[] = [];

    const initalState: Partial<State> = {
      recipesPod: {
        recipes,
      },
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesContainer />, {
      initalState,
      reducer: recipesPodReducer,
    });
    const elements = queryAllByTestId('row');

    // Assert
    expect(elements).toHaveLength(0);
  });

  it('Table should be 2 elements', () => {
    // Arrange
    const recipes: Recipe[] = [
      { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
      { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
    ];

    const initalState: Partial<State> = {
      recipesPod: {
        recipes,
      },
    };

    // Act
    const { queryAllByTestId } = renderWithRedux(<RecipesContainer />, {
      initalState,
      reducer: recipesPodReducer,
    });
    const elements = queryAllByTestId('row');

    // Assert
    expect(elements).toHaveLength(2);
  });

  it('Table should be 2 elements', () => {
    // Arrange
    const recipes: Recipe[] = [
      { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
      { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
    ];
    const initalState: Partial<State> = {
      recipesPod: {
        recipes,
      },
    };
    const getRecipesRequestStub = jest.spyOn(actions, 'getRecipesRequest');

    // Act
    renderWithRedux(<RecipesContainer />, {
      initalState,
      reducer: recipesPodReducer,
    });

    // Assert
    expect(getRecipesRequestStub).toHaveBeenCalled();
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