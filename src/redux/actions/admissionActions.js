import ActionTypes from "../constants/ActionTypes";

export const setAllAdArticles = (articles) => ({
   type: ActionTypes.SET_ALL_ADMISSION_ARTICLES,
   payload: articles,
});

export const addAdmisArticle = (article) => ({
   type: ActionTypes.ADD_ADMISSION_ARTICLE,
   payload: article,
});

export const editAdmisArticle = (id, article) => ({
   type: ActionTypes.EDIT_ADMISSION_ARTICLE,
   payload: {
      id: id,
      article: article
   }
});

// export const likeAdArticle = (id) => ({
//    type: ActionTypes.LIKE_ADMISSION_ARTICLE,
//    payload: { id },
// });
