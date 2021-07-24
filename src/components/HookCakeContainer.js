import React, { useState } from 'react'
import { buyCake } from '../redux/cake/actions'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/action'

const HookCakeContainer = () => {
  const { numOfCakes } = useSelector((state) => state.cake)
  const { numOfIceCreams } = useSelector((state) => state.iceCream)
  const dispatch = useDispatch()

  const [ice, setIce] = useState(1)
  return (
    <div>
      <h2>Number of Cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <h2>Number of iceCream {numOfIceCreams}</h2>
      <input type="text" value={ice} onChange={(e) => setIce(e.target.value)} />
      <button onClick={() => dispatch(buyIceCream(ice))}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer
