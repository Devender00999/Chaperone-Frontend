import ActionTypes from "../constants/ActionTypes";

export const adArticleReducer = (
  state = { selectedArticle: null },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_ALL_ADMISSION_ARTICLES:
      return { articles: [...payload], filteredArticles: [...payload] };

    case ActionTypes.SET_SELECTED_ARTICLE:
      const selectedArticle = payload;
      return {
        ...state,
        selectedArticle: { ...selectedArticle },
      };

    case ActionTypes.ADD_ADMISSION_ARTICLE:
      let articles = [...state.articles, payload];
      return {
        ...state,
        articles,
        filteredArticles: [...articles],
      };
    case ActionTypes.EDIT_ADMISSION_ARTICLE:
      articles = [...state.articles];
      const id = articles.findIndex((item) => item._id === payload.id);
      articles[id] = payload.article;
      return {
        ...state,
        articles,
        filteredArticles: [...articles],
      };

    case ActionTypes.DELETE_ADMISSION_ARTICLE:
      articles = [...state.articles];
      articles = articles.filter((arti) => arti._id !== payload.id);
      return {
        ...state,
        articles,
        filteredArticles: [...articles],
      };

    case ActionTypes.FILTER_ADMISSION_ARTICLES:
      return {
        ...state,
        filteredArticles: payload.articles,
      };
    default:
      return state;
  }
};
