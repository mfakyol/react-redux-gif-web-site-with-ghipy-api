import { GET_TRENDING } from "../actions/types";

export default function trendingReducer(state = "", action) {
  switch (action.type) {
    case GET_TRENDING:
      return action.payload.trending;
    default:
      return state;
  }
}


