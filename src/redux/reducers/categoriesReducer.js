import { GET_CATEGORİES } from "../actions/types";

export default function categoriesReducer(state = "", action) {
  switch (action.type) {
    case GET_CATEGORİES:
      return action.payload.categories;
    default:
      return state;
  }
}
