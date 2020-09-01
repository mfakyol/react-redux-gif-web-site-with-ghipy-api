import {  GET_DETAIL, CLEAR_DETAIL } from "./types";
import Axios from "axios";
const apiKey = "cWPV5mekjIG1yyRo8RKTN2WpgzEL7EUZ";

export function updateDetail(detail) {
    return {
      type: GET_DETAIL,
      payload: {
        detail
      },
    };
  }
export function clearDetail() {
    return {
      type: CLEAR_DETAIL,
      payload: {
        detail: {}
      },
    };
  }
  
  export function getDetail(gifId) {
    return (dispatch) => {
      Axios.get(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`)
        .then((response) => response.data.data)
        .then((data) =>
          dispatch(updateDetail(data))
        )
        .catch((err) => console.log(err));
    };
  }