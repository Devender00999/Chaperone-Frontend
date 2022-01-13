import ActionTypes from "../constants/ActionTypes";

export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_CREATE_ACCOUNT:
      return { ...payload };
    default:
      return state;
  }
};

export const adminReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_ADMISSION_ARTICLES:
      return { ...state, articles: payload };

    case ActionTypes.SET_ADMISSION_ARTICLE:
      return { ...state, admissionArticle: payload };

    case ActionTypes.LIKE_ADMISSION_ARTICLE:
      const { articles } = state;
      const index = articles.findIndex((item) => item.id === payload.id);

      articles[index].liked = !articles[index].liked;
      return { ...state, articles };
    default:
      return state;
  }
};
