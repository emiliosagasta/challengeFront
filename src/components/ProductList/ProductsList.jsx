import React, { useState } from "react";
import list from "../../products.json"
import MediaComponent from "../MediaComponent";
import SearchBar from "../searchBar";

function ProductList() {

const products = list.productos;
const [searchText, setSearchText] = useState(""); //preguntar 

//preguntar 
const handleChange = (e) => {
  console.log(e.target.value);
  setSearchText(e.target.value)
}

// Product List header
// product list content


// const ProductsList = () => {
    console.log(list.productos);
  return (
    <div className="list-item-container">
      <SearchBar handleChange={handleChange}/>
      <MediaComponent products={products} searchText={searchText} />
    </div>
  );
}

export default ProductList