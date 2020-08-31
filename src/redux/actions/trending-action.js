import { GET_TRENDING } from "./types";
import Axios from "axios";
const apiKey = "cWPV5mekjIG1yyRo8RKTN2WpgzEL7EUZ";

export function updateTrending(trending) {
  return {
    type: GET_TRENDING,
    payload: {
      trending
    },
  };
}

export function getTrending(offset, limit) {
  return (dispatch) => {
    Axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}&limit=${limit}`)
      .then((response) => response.data.data)
      .then((data) =>
        dispatch(updateTrending(data))
      )
      .catch((err) => console.log(err));
  };
}
