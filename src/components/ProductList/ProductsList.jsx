import React, { useState, useEffect} from "react";
import list from "../../products.json"
import MediaComponent from "../MediaComponent";
import SearchByName from "../searchBar/SearchByName";
import SearchByPrice from "../searchBar/SearchByPrice";

function ProductList() {

const [searchText, setSearchText] = useState("");
const [products, setProducts] = useState(list.productos);
// const sortByProductsLow = products.sort((x, y) => y.price - x.price)
// const sortByProductsHigh = products.sort((x, y) => y.price - x.price)

useEffect(() => {
  setProducts(list.productos) 
},[]);
// Product List header
// product list content
  console.log('holiii', products);
  return (
    <div className="list-item-container">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 py-0 text-center mt-10">
        Catálogo
      </h2>
      <div className="flex items-center">
        <SearchByName setSearchText={setSearchText} />
        <SearchByPrice 
        // productshigh={products.sort((x, y) => y.price - x.price)}
        // productslow={products.sort((x, y) => y.price - x.price)}
        />
      </div>
      <MediaComponent products={products} searchText={searchText} /*filterPrice={filterPrice}*/ />
    </div>
  );
}

export default ProductList