import React from 'react'

const SearchBar = ({handleChange}) => {
  return (
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 w-100">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 py-0">
        Catálogo
      </h2>
      <div class="flex w-full">
        <div class="w-6/12">
          <input
            onChange={handleChange}
            class="appearance-none w-7/12 block w-3/12 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            id="grid-last-name"
            type="text"
            placeholder="Buscar productos por nombre"
          />
        </div>
        <div class="w-6/12 flex flex-col items-center">
          <p class="text-gray-600 w-40"> Buscar por</p>
          <select
            class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray w-40	text-center	"
            id="grid-state"
          >
            <option>Seleccionar</option>
            <option>Mas baratos</option>
            <option>Mas Caros</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchBar