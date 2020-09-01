import { GET_DETAIL, CLEAR_DETAIL } from "../actions/types";

export default function detailReducer(state = {}, action) {
  switch (action.type) {
    case GET_DETAIL:
      return action.payload.detail;
    case CLEAR_DETAIL:
      return action.payload.detail;
    default:
      return state;
  }
}
