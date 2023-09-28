import React from 'react'
// import { useState } from 'react';

function SearchByPrice({ sortByProductsHigh, sortByProductsLow}) {


// const [filterPrice, setFilterPrice] = useState([]); 

 return (
    <div className="w-6/12 flex flex-col items-center">
          <p className="text-gray-600 w-40 text-center"> Buscar por</p>
          <select
            className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray w-40	text-center	mb-6"
            id="grid-state"
          >
            <option>Seleccionar</option>
            <option
              onClick={sortByProductsLow}
              // onClick={handlerFilterChangeHigh}
              >
            Mas baratos
            </option>
            <option
              value="high"
              onChange={sortByProductsHigh}
              // onChange={HandleChangePrice}
              >
              Mas Caros
              </option> 
          </select>
        </div>
)}
 export default SearchByPrice;