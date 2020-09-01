import { GET_RANDOMID } from "../actions/types";

export default function detailReducer(state = '', action) {
  switch (action.type) {
    case GET_RANDOMID:
      return action.payload.randomId;

    default:
      return state;
  }
}
