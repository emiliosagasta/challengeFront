import React from 'react'
import { useSelector} from 'react-redux'
import MediaComponent from '../MediaComponent'

const Cart = () => {
    const count = useSelector((state) => state.counter.value)
console.log('aaaaaa',count)
  return (
    <MediaComponent products={count} searchText={''}/>
  )
}

export default Cart