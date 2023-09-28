import React from 'react'
// import { useState } from 'react';


const SearchByName = ({setSearchText}) => {

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-100 text-center">
      
      <div className="flex w-screen">
        <div className="w-6/12">
          <input
            onChange={handleChange}
            className="appearance-none w-7/12 block w-3/12 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            id="grid-last-name"
            type="text"
            placeholder="Buscar productos por nombre"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchByName