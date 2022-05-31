import ActionTypes from "../constants/ActionTypes";

export const setAllAdArticles = (articles) => ({
  type: ActionTypes.SET_ALL_ADMISSION_ARTICLES,
  payload: articles,
});

export const setSelectedArticle = (article) => ({
  type: ActionTypes.SET_SELECTED_ARTICLE,
  payload: article,
});

export const addAdmisArticle = (article) => ({
  type: ActionTypes.ADD_ADMISSION_ARTICLE,
  payload: article,
});

export const editAdmisArticle = (id, article) => ({
  type: ActionTypes.EDIT_ADMISSION_ARTICLE,
  payload: {
    id: id,
    article: article,
  },
});

export const deleteAdmisArticle = (id) => ({
  type: ActionTypes.DELETE_ADMISSION_ARTICLE,
  payload: { id: id },
});

export const filterAdmisArticle = (query, articles) => ({
  type: ActionTypes.FILTER_ADMISSION_ARTICLES,
  payload: {
    query,
    articles:
      query.length > 0
        ? articles.filter((arti) => arti.heading.includes(query))
        : articles,
  },
});
// export const likeAdArticle = (id) => ({
//    type: ActionTypes.LIKE_ADMISSION_ARTICLE,
//    payload: { id },
// });
