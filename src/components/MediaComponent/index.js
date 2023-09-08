import React from 'react'
import MediaCard from "../MediaCard/MediaCard";

const MediaComponent = ({products, searchText}) => {
  return (
    <div class="grid grid-cols-4 gap-4">
    {products
      .filter((e) =>
        e.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((producto, i) => {
        return (
          <div key={i}>
            <MediaCard
              title={producto.title}
              price={producto.price}
              id={producto.id}
              searchText={searchText}
            />
          </div>
        );
      })}
  </div>
  )
}

export default MediaComponent