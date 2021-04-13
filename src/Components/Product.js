import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className="products">
        <img className="images" src={product.img} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button className="button" onClick={()=>onAdd(product)}>Add To Cart</button>
        </div>
        </div>
    )
}
