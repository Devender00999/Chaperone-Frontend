import ActionTypes from "../constants/ActionTypes";

export const setAllAdArticles = (articles) => ({
   type: ActionTypes.SET_ALL_ADMISSION_ARTICLES,
   payload: articles,
});

export const setAdArticle = (article) => ({
   type: ActionTypes.SET_ADMISSION_ARTICLE,
   payload: article,
});

export const likeAdArticle = (id) => ({
   type: ActionTypes.LIKE_ADMISSION_ARTICLE,
   payload: { id },
});
