import { GET_GIFSBYCATEGORY, INSERT_GIFSBYCATEGORY } from "../actions/types";

export default function gifsByCategoryReducer(state = [], action) {
  switch (action.type) {
    case GET_GIFSBYCATEGORY:
      return action.payload.gifsByCategory;
    case INSERT_GIFSBYCATEGORY:
      return [...state, ...action.payload.gifsByCategory];
    default:
      return state;
  }
}
