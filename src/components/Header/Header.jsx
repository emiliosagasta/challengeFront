import React from 'react';
import Data from './../../profile.json'


const Header = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Tienda de Productos</span>
        </div>
        {/* <div class="block lg:hidden">
        </div> */}
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
          <div class="text-sm lg:flex-grow">
            <a href="PerfilName" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                  <h3> {Data.profile.firstName}</h3>
            </a>
            <a href="Carrito" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
              Carrito ( )
            </a>
            <a href="Credito" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
              Crédito $ {Data.profile.credit}
            </a>
          </div>
        </div>
      </nav>
  )
}
export default Header;