import ActionTypes from "../constants/ActionTypes";

export const setallAcadArticles = (articles) => ({
   type: ActionTypes.SET_ALL_ACADEMICS_ARTICLES,
   payload: articles,
});

export const addAcadArticle = (article) => ({
   type: ActionTypes.ADD_ACADEMICS_ARTICLE,
   payload: article,
});

export const editAcadArticle = (id, article) => ({
   type: ActionTypes.EDIT_ACADEMICS_ARTICLE,
   payload: {
      id: id,
      article: article
   }
});

export const deleteAcadArticle = (id) => ({
   type: ActionTypes.DELETE_ACADEMICS_ARTICLE,
   payload: { id: id }
});