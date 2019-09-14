import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Recipe } from 'pods/recipes/recipes.view-model';
import { useRecipes } from 'pods/recipes/hooks';


describe('useRecipes specs', () => {
    it('should update recipes when them calls setFilteredRecipes', () => {
        // Arrange
        const recipes: Recipe[] = [
            { id: 'xx', name: 'pizza', ingredients: ['tomato', 'cheese', 'flour']},
            { id: 'yy', name: 'cake', ingredients: ['cream', 'butter', 'egg', 'flour']}
        ];

        // Act
        const { result } = renderHook(() => useRecipes(recipes));    
    
        // Assert
        expect(result.current.filteredRecipes).toEqual(recipes);
      });
});
