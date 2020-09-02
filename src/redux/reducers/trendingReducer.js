import { GET_TRENDING, INSERT_TRENDING } from "../actions/types";

export default function trendingReducer(state = "", action) {
  switch (action.type) {
    case GET_TRENDING:
      return action.payload.trending;
    case INSERT_TRENDING:
      return [...state, ...action.payload.trending];
    default:
      return state;
  }
}


