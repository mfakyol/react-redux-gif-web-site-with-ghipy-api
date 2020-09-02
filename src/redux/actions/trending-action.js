import { GET_TRENDING, INSERT_TRENDING } from "./types";
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
export function insertTrending(trending) {
  return {
    type: INSERT_TRENDING,
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
       offset === 0 ?  dispatch(updateTrending(data)) : dispatch(insertTrending(data))
      )
      .catch((err) => console.log(err));
  };
}
