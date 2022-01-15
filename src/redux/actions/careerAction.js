import ActionTypes from "../constants/ActionTypes";

export const setAllCareerArticles = (articles) => ({
   type: ActionTypes.SET_ALL_CAREER_ARTICLES,
   payload: articles,
});

export const addCareerArticle = (article) => ({
   type: ActionTypes.ADD_CAREER_ARTICLE,
   payload: article,
});

export const editCareerArticle = (id, article) => ({
   type: ActionTypes.EDIT_CAREER_ARTICLE,
   payload: {
      id: id,
      article: article
   }
});

export const deleteCareerArticle = (id) => ({
   type: ActionTypes.DELETE_CAREER_ARTICLE,
   payload: { id: id }
});