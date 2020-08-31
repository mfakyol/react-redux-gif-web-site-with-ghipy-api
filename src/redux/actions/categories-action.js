import { GET_CATEGORİES } from "./types";
import Axios from "axios";
const apiKey = "cWPV5mekjIG1yyRo8RKTN2WpgzEL7EUZ";

export function updateCategories(categories) {
  return {
    type: GET_CATEGORİES,
    payload: {
      categories
    },
  };
}

export function getCategories() {
  return (dispatch) => {
    Axios.get("https://api.giphy.com/v1/gifs/categories?api_key=" + apiKey)
      .then((response) => response.data.data)
      .then((data) =>
        dispatch(updateCategories(data.map((element) => element.name)))
      )
      .catch((err) => console.log(err));
  };
}
