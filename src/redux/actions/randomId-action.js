import {  GET_RANDOMID } from "./types";
import Axios from "axios";
const apiKey = "cWPV5mekjIG1yyRo8RKTN2WpgzEL7EUZ";

export function updateRandomId(randomId) {
    return {
      type: GET_RANDOMID,
      payload: {
        randomId
      },
    };
  }
  
  export function getRandomId() {
    return (dispatch) => {
      Axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        .then((response) => response.data.data)
        .then((data) =>
          dispatch(updateRandomId(data.id))
        )
        .catch((err) => console.log(err));
    };
  }