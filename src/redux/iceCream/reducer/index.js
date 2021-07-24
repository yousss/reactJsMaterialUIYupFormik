import { BUY_ICECREAM } from '../constansts'

const initialState = {
  numOfIceCreams: 20,
}

const buyIceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      }

    default:
      return state
  }
}

export default buyIceCreamReducer
