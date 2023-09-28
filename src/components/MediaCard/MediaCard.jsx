import React from 'react';
import cellphone from "./../../image-product.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../Redux/counterSlice'
import { useNavigate } from 'react-router-dom'


function MediaCard({producto}) {
const count = useSelector((state) => state.counter.value)
const navigate = useNavigate()
const dispatch = useDispatch() //para enviar datos

const butttonText = !!count.some(e => e.id === producto.id) ? "Ver carrito" : "Agregar al carrito"
  return ( 
  <div className="bg-white">
      <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 h-full" >
            <img src={cellphone} alt="celular" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <div className="flex-col gap-y-2 text-center">
            <h3 className="text-sm text-gray-700">{producto.title}</h3>
            <p className="text-sm font-semibold text-gray-900 ">$ {producto.price}</p>
            <button className="inline-block border rounded-md py-1 px-3 bg-black text-white hover:bg-violet-600" onClick={() => {
              if(butttonText === "Agregar al carrito"){
                dispatch(increment(producto))
              }else {
                navigate('/cart1')
              }
            }}>{butttonText}</button>
          </div>
      </div>
    </div>
/* </div> */

)
}
export default MediaCard;