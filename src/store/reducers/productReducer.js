import { GET_PRODUCTS, SET_ERROR, SET_LOADING, GET_PRODUCT_BY_ID } from "../keys";

const initialState = {
  products: [],
  productById: {},
  isLoading: false,
  isError: null,
  userBag: [],
  perItem: {}
}

export default function reducer (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload }
    case GET_PRODUCT_BY_ID:
      return { ...state, productById: payload }
    case SET_LOADING:
      return { ...state, isLoading: payload }
    case SET_ERROR:
      return { ...state, isError: payload }
    default:
      return state
  }
}