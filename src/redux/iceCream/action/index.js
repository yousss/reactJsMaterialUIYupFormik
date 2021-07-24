import { BUY_ICECREAM } from '../constansts'

export const buyIceCream = (iceCream = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: iceCream,
  }
}
