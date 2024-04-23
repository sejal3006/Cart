import React, { useState } from "react";
import "./Card.css";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const Card = ({ product, setProduct , quantity, setQuantity}) => {
  const [total, setTotal] = useState(0);
  function increase(id) {
    let tempProduct = product;
    tempProduct.map((product) => {
      if (product.id === id) {
        product.Quantity += 1;
        setTotal(total + product.price);
        setQuantity(quantity+1);
      }
      return product;
    });
    let temp = [...tempProduct];
    setProduct(temp);
  }
  function decrease(id) {
    let tempProduct = [...product];
    tempProduct.map((product) => {
      if (product.id === id && product.Quantity >= 1) {
        product.Quantity -= 1;
        setTotal(total - product.price);
        setQuantity(quantity-1);
      }
      return product;
    });
    setProduct(tempProduct);
  }

  function removeProduct(id){
    let tempProduct = [...product];
    let arr = tempProduct.filter((product)=>{
        if(product.id === id){
            setTotal(total - product.Quantity * product.price);
            setQuantity(quantity- product.quantity);
        }
        return product.id !== id;
    })
    setProduct(arr);
  }
  return (
    <section>
      <h1 className="main">YOUR BAG</h1>
      {product.length <= 0 && <p style={{textAlign: "center", fontSize : "30px"}}>is Currently Empty</p>}
      {product.map((product) => {
        return (
          <article key={product.id}>
            <div className="left">
              <img src={product.imgurl} id="img"></img>
              <div className="details">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="remove-btn" onClick={()=>{
                    removeProduct(product.id);
                }}>remove</p>
              </div>
            </div>
            <div className="right">
             <main>
             <button
                id="btn1"
                onClick={() => {
                  increase(product.id);
                }}
              >
                <TiArrowSortedUp />
              </button>
              <span>{product.Quantity}</span>
              <button
                id="btn22"
                onClick={() => {
                  decrease(product.id);
                }}
              >
                <TiArrowSortedDown />
              </button>
             </main>
            </div>
          </article>
        );
      })}
      <br />
            <hr />
            <br />
      <footer>
        <ul>
          <li>Total</li>
          <li >{total}</li>
        </ul>
        <div className="clear" onClick={()=>{
            setProduct([]);
            setTotal(0);
            setQuantity(0);
        }}>Clear Card</div>
      </footer>
    </section>
  );
};

export default Card;

{
  /* <section>
<h1 className='main'>YOUR BAG</h1>
{product.length <=0 && <p>is Currently Empty</p>}
<article key={product.id}>
            <div className='left'>
                <img src={product.imgurl} id="img"></img>
                <div className='details'>
                    <h3>{product.name}</h3>
                    <p className='price'>{product.price}</p>
                    <p className='remove-btn'>remove</p>
                </div>
            </div>
            <div className='right'>
                <button id="btn1" onClick={
                    ()=>{increase(product.id)}
                }><TiArrowSortedUp /></button>
                <span>{product.Quantity}</span>
                <button id="btn22" onClick={
                    ()=>{decrease(product.id)}
                }><TiArrowSortedDown /></button>
            </div>
            <br/>
            <hr style={{backgroundColor : "orange"}}/>
            <br/>
            <footer>
                <ul>
                <li>Total</li>
                <li>{total}</li>
                </ul>
                <div className='clear'>
                    Clear Card
                </div>
            </footer>

        </article>
</section>
) */
}