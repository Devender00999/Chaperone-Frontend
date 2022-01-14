import ActionTypes from "../constants/ActionTypes";

export const adArticleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_ADMISSION_ARTICLES:
      return payload;
      
    case ActionTypes.ADD_ADMISSION_ARTICLE:
      console.log(payload, state);
      return [...state, payload];

    case ActionTypes.EDIT_ADMISSION_ARTICLE:
      const articles = [...state];
      console.log(articles);
      const id = articles.findIndex((item) => item._id === payload.id);
      articles[id] = payload.article;
      return articles;

    default:
      return state;
  }
};
