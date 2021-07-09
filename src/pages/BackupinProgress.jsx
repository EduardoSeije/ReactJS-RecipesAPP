import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../contexts/app/AppContext';
import Header from '../components/Header';
import './RecipiesInProgress.css';
import LowerMenu from '../components/LowerMenu';
import DrinksContext from '../contexts/drinks/DrinksContext';
import FoodContext from '../contexts/foods/FoodContext';
import ShareButton from '../components/recipiesInProgress/ShareButton';
import FavoriteButton
  from '../components/recipiesInProgress/FavoriteButton';
import HomeButton from '../components/recipiesInProgress/HomeButton';

const RecpiesInProgress = (props) => {
  const { screenActive } = useContext(AppContext); // Se é food ou drink (defalt é food)
  const { mealsRecipes } = useContext(FoodContext); // Array de obj contendo todas as receitas do tipo food
  const { drinksRecipes } = useContext(DrinksContext); // Array de obj contendo todas as receitas do tipo drink
  const [idRecipeInProgress, setIdRecipeInProgress] = useState(); // Receita em andamento
  const [recipeInProgress, setRecipeInProgress] = useState(); // Receita em andamento
  const [recipeIngredients, setRecipeIngredients] = useState([]); // Ingredientes da receita
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]); // Receita em andamento
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   if (mealsRecipes !== undefined && mealsRecipes.length !== 0) {
  //     if (screenActive === 'food') { return setRecipeInProgress(mealsRecipes); }
  //     if (screenActive === 'drink') { return setRecipeInProgress(); }
  //   }
  // }, [mealsRecipes, drinksRecipes]);

  console.log(props.match.params.id);
  // console.log(recipeInProgress);

  useEffect(() => {
    setIdRecipeInProgress(props.match.params.id);
  }, []);

  // console.log(recipeInProgress);

  const lerDoLocalStorage = () => {
    // if (idRecipeInProgress !== undefined && idRecipeInProgress.length !== 0) {
    //   if (screenActive === 'food') {
    //     const localStorageItem = localStorage.getItem('inProgressRecipes');
    //     const object = JSON.parse(localStorageItem);
    //     if (object !== null || object !== undefined) {
    //       setIngredientsInProgress(object.meals[idRecipeInProgress]);
    //     }
    //   }
    //   if (screenActive === 'drink') {
    //     const localStorageItem = localStorage.getItem('inProgressRecipes');
    //     const object = JSON.parse(localStorageItem);
    //     setIngredientsInProgress(object.cocktails[idRecipeInProgress]);
    //   }
    // }
    // return null;
  };

  useEffect(() => {
    lerDoLocalStorage();
  }, [idRecipeInProgress]);

  const separateTheCecipeProgressFood = () => {
    if (mealsRecipes !== undefined && mealsRecipes.length !== 0) {
      const recipeInProgreessInfo = Object.assign({}, ...mealsRecipes
        .filter(({ idMeal }) => idMeal === idRecipeInProgress));
      setRecipeInProgress(recipeInProgreessInfo);
      console.log(recipeInProgreessInfo);
      const ingredientes = [];
      Object.entries(recipeInProgreessInfo).filter(([key, value]) => {
        if (key.includes('strIngredient') && value !== '') { ingredientes.push(value); }
        return null;
      });
      setRecipeIngredients(ingredientes);
    }
  };

  const separateTheCecipeProgressDrink = () => {
    if (mealsRecipes !== undefined && mealsRecipes.length !== 0) {
      const recipeInProgreessInfo = Object.assign({}, ...drinksRecipes
        .filter(({ idDrink }) => idDrink === idRecipeInProgress));
      setRecipeInProgress(recipeInProgreessInfo);
      // console.log(recipeInProgreessInfo);

      const ingredientes = [];
      Object.entries(recipeInProgreessInfo).filter(([key, value]) => {
        if (key.includes('strIngredient') && value !== null) { ingredientes.push(value); }
        return null;
      });
      setRecipeIngredients(ingredientes);
    }
  };

  const choseTypeOfRecipe = () => {
    // if (screenActive === 'food') { return separateTheCecipeProgressFood(); }
    // if (screenActive === 'drink') { return separateTheCecipeProgressDrink(); }
  };

  useEffect(() => {
    choseTypeOfRecipe();
  }, [mealsRecipes, drinksRecipes]);

  const changeClassesWhenIngredientClicked = (event) => {
    if (event.target.parentNode.className === 'stepNotDoneYet') {
      event.target.parentNode.className = 'stepDone';
    } else { event.target.parentNode.className = 'stepNotDoneYet'; }
  };

  const checkIngredientWhenClicked = (event) => {
    if (!ingredientsInProgress.includes(event.target.value)) {
      setIngredientsInProgress(ingredientsInProgress.concat(event.target.value));
    } else if (ingredientsInProgress.includes(event.target.value)) {
      setIngredientsInProgress(ingredientsInProgress.filter((step) => !step
        .includes(event.target.value)));
    }
    return null;
  };

  const returnTitleRecipe = () => {
    if (recipeInProgress) {
      if (screenActive === 'food') { return recipeInProgress.strMeal; }
      if (screenActive === 'drink') { return recipeInProgress.strDrink; }
    }
    return null;
  };

  const returnCategoryRecipe = () => {
    if (recipeInProgress) { return recipeInProgress.strCategory; }
    return null;
  };

  const returnThumbRecipe = () => {
    if (recipeInProgress) {
      if (screenActive === 'food') { return recipeInProgress.strMealThumb; }
      if (screenActive === 'drink') { return recipeInProgress.strDrinkThumb; }
    }
    return null;
  };

  const returnInstructionsRecipe = () => {
    if (recipeInProgress) { return recipeInProgress.strInstructions; } // mesmo esquema
    return null;
  };

  const saveUserInfoInLocalStorage = () => {
    if (recipeInProgress) {
      if (screenActive === 'food') {
        const keyLocalStore = { meals: { [idRecipeInProgress]: ingredientsInProgress } };
        const userInfoJson = JSON.stringify(keyLocalStore);
        localStorage.setItem('inProgressRecipes', userInfoJson);
      }
      if (screenActive === 'drink') {
        const keyLocalStore = {
          cocktails: { [idRecipeInProgress]: ingredientsInProgress } };
        const userInfoJson = JSON.stringify(keyLocalStore);
        localStorage.setItem('inProgressRecipes', userInfoJson);
      }
    }
    return null;
  };

  useEffect(() => {
    saveUserInfoInLocalStorage();
  }, [ingredientsInProgress]);

  const redirectFunc = () => {
    if (redirect === true) { return (<Redirect to="/receitas-feitas" />); }
    return null;
  };

  const buttonFinalizar = () => {
    setRedirect(true);
  };

  const checkRecipieFinalized = () => recipeIngredients.length === 0
    || recipeIngredients.length !== ingredientsInProgress.length;

  // Gera dinamicamente a lista de ingredientes com checkbox
  const ingredientsCheckBox = () => {
    const checkList = recipeIngredients.map((ingredient, index) => (
      <div key={ ingredient }>
        <label
          htmlFor={ `${index}-ingredient-step` }
          className="stepNotDoneYet"
          style={ ingredientsInProgress.includes(ingredient)
            ? { textDecoration: 'line-through' } : null }
        >
          <input
            onClick={ (event) => {
              checkIngredientWhenClicked(event);
              changeClassesWhenIngredientClicked(event);
            } }
            value={ ingredient }
            id={ `${index}-ingredient-step` }
            type="checkbox"
            data-testid={ `${index}-ingredient-step` }
            checked={ ingredientsInProgress.includes(ingredient) }
          />
          { ingredient }
        </label>
      </div>
    ));
    return checkList;
  };
  return (
    <div>
      <Header />
      <div>
        <ShareButton />
        <FavoriteButton />
        <HomeButton />
        {/* <CheckButton /> */}
        <button
          type="button"
          onClick={ buttonFinalizar }
          disabled={ checkRecipieFinalized() }
        >
          Finalizar
        </button>
      </div>
      <h2
        className="recipe-title"
        data-testid="recipe-title"
      >
        { recipeInProgress && returnTitleRecipe() }
      </h2>
      <h3
        data-testid="recipe-category"
      >
        {returnCategoryRecipe() }
      </h3>
      <img
        className="recipe-photo-in-progress"
        data-testid="recipe-photo"
        width="50%"
        src={ returnThumbRecipe() }
        alt={ `Recipe of the ${returnTitleRecipe()}` }
      />
      <div className="ingredient-step">
        <h2>Ingredientes</h2>
        {ingredientsCheckBox()}
      </div>
      <div className="instructions">
        <h2>Instruções</h2>
        <p
          data-testid="instructions"
        >
          { returnInstructionsRecipe() }
        </p>
      </div>
      <LowerMenu />
      {redirectFunc()}
    </div>
  );
};

RecpiesInProgress.propTypes = { match: PropTypes.shape({ params: PropTypes.shape({
  id: PropTypes.string,
}),
}).isRequired,
};
export default RecpiesInProgress;
