import { GET_PRODUCTS, SET_ERROR, SET_LOADING, GET_PRODUCT_BY_ID } from "../keys";
import apiNike from "../../apis/apiNike"

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload
  }
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}

export function getProducts(payload) {
  return {
    type: GET_PRODUCTS,
    payload
  }
}

export function getProductById(payload) {
  return {
    type: GET_PRODUCT_BY_ID,
    payload
  }
}

export function fetchPoductById(name) {
  // console.log(name);
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const { data } = await apiNike({
        method: 'GET',
        url: '/megasuartika/fe-assignment/db'
      })
      const dataById = data.shoes.filter(el => el.name === name)
      // console.log(dataById, "ini di action");
      dispatch(getProductById(dataById[0]))
      dispatch(setLoading(false))
    } catch (err) {
      console.log(err.response.data, 'di action');
      dispatch(setError(err.response.data))
    }
  }
} 

export function fetchPoducts() {
  return async function (dispatch) {
    dispatch(setLoading(true))
    try {
      const { data } = await apiNike({
        method: 'GET',
        url: '/megasuartika/fe-assignment/db'
      })
      dispatch(getProducts(data.shoes))
      dispatch(setLoading(false))
    } catch (err) {
      console.log(err.response.data, 'di action');
      dispatch(setError(err.response.data))
    }
  }
} 