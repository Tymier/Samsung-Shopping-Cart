import React from 'react';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <header>
        <div className="header">
            <a href="#/">
                <h1>S A M S U N G</h1>
            </a>
            <a className="items" href="#/cart">Cart{' '}{countCartItems ? (
                <button className="badge">{countCartItems}</button>
            ) : ( '' )}</a> 
        </div>
        </header>
    );
}