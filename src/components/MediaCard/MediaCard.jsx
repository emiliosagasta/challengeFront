import React from 'react';
import cellphone from "./../../image-product.jpg"

function MediaCard({setSearchText, title, price, id}) {

// array del contexto
const cartProducts = [{
  "id": 1,
  "title": "Celular Motorola E7 32 GB Gris",
  "brand": "Motorola",
  "sku": "7RRTTN2WRXANRSIG",
  "price": 21999,
  "discount": 0
},
{
  "id": 2,
  "title": "Celular Motorola G20 SE 128GB Azul",
  "brand": "Motorola",
  "sku": "6EWKNP0EMEWND687",
  "price": 33999,
  "discount": 0
},];
  //buscador de lo que escribo
  /* const handleChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value)
  } */

// const MediaCard = ({title, price}) => {
  return ( 
  <div class="bg-white">
    {/* <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 py-0">Catálogo</h2>
      <div class="flex">
        <input onChange ={handleChange} class="appearance-none block w-3/12 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="Buscar productos por nombre" />
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> 
        </div> 
        <p class='text-gray-600'> Buscar por</p>
        <select class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray" id="grid-state">
          <option>Seleccionar</option>
          <option>Mas baratos</option>
          <option>Mas Caros</option>
        </select>
    </div> */}
    {/* <div class="grid grid-cols-4 gap-4"> */}
      <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 h-full" >
            <img src={cellphone} alt="celular" class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
          </div>
          <div class="flex-col gap-y-2">
            <h3 class="text-sm text-gray-700">{title}</h3>
            <p class="text-sm font-semibold text-gray-900 ">$ {price}</p>
            <button class="inline-block border rounded-md py-1 px-3 bg-black text-white hover:bg-violet-600" onclick={() =>"carrito"}>{!!cartProducts.some(e => e.id === id) ? "ver carrito" : "agregar al carrito"}</button>
          </div>
      </div>
    </div>
/* </div> */

)
}
export default MediaCard;