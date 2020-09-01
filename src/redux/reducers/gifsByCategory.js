import { GET_GIFSBYCATEGORY } from "../actions/types";

export default function gifsByCategory(state = [], action) {
  switch (action.type) {
    case GET_GIFSBYCATEGORY:
      return action.payload.gifsByCategory;
    default:
      return state;
  }
}
