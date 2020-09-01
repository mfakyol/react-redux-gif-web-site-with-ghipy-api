import { GET_GIFSBYCATEGORY } from "./types";
import Axios from "axios";
const apiKey = "cWPV5mekjIG1yyRo8RKTN2WpgzEL7EUZ";

export function updateGifsByCategory(gifsByCategory) {
  return {
    type: GET_GIFSBYCATEGORY,
    payload: {
        gifsByCategory
    },
  };
}

export function getGifsByCategory(offset, limit, category) {
  return (dispatch) => {
    Axios.get(`https:/api.giphy.com/v1/gifs/search?api_key=${apiKey}&offset=${offset}&limit=${limit}&q=${category}`)
      .then((response) => response.data.data)
      .then((data) =>
        dispatch(updateGifsByCategory(data))
      )
      .catch((err) => console.log(err));
  };
}
