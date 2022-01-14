import ActionTypes from "../constants/ActionTypes";

export const adArticleReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_ADMISSION_ARTICLES:
      return [{ ...payload }];

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
