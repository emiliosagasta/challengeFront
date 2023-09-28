import React from 'react';
import Data from './../../profile.json'
import { useSelector } from 'react-redux'
// import {useNavigate} from 'react-router-dom'

const Header = () => {
  // const navigate = useNavigate()
  const count = useSelector((state) => state.counter.value)
  const credit = useSelector((state) => state.counter.amount) //envio contador monto de productos

    return (
        <nav className="flex justify-between bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href='/' className="font-semibold text-xl tracking-tight" >Tienda de Productos</a>
        </div>
        {/* <div className="block lg:hidden">
        </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
          <div className="text-sm lg:flex-grow">
            <a href="PerfilName" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                  <h3> {Data.profile.firstName}</h3>
            </a>
            <a href="Cart1" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Carrito ({count.length})
            </a>
            <a href="Credito" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Crédito $ {credit}
            </a>
          </div>
        </div>
      </nav>
  )
}
export default Header;