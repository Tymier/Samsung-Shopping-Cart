import React from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = 25;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return <aside className="block">
        <h2 className="cart">Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div>{item.name}</div>
                <div>
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="minus">-</button>
                </div>
                <div>{item.qty} x ${item.price.toFixed(2)}</div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div>
                <div>Items Price</div>
                <div>${itemsPrice.toFixed(2)}</div>
            </div>
            <div>
                <div>Tax Price</div>
                <div>${taxPrice.toFixed(2)}</div>
            </div>
            <div>
                <div>Shipping Price</div>
                <div>${shippingPrice.toFixed(2)}</div>
            </div>
            <div>
                <div><strong>Total Price</strong></div>
                <div><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr/>
            <div>
                <button className="checkout" onClick={() => alert('Checkout')}>Checkout</button>
            </div>
            </>
        )}
    </aside>;
}