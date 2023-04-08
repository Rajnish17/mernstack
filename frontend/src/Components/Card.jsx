import React from 'react'
import "./css/card.css"
import product from "./product"
import { useDispatch } from 'react-redux';
import { addTocart } from '../store/slices';


function Card() {
   const dispatch =useDispatch();
 
  return (
    <div className='main_container' >
        {
            product.map((ele,id)=>{
                return <div className='Card-display' key={id}>
                 <div  className="card container p-3 mt-4 shadow p-3 mb-5 bg-body rounded">
                <img src={ele.image} style={{ width: "300px",height:"400px" }} className="card-img-top" alt="." />
                <div className="card-body">
                  <h5 className="card-title">{ele.item}</h5>
                  <p className="card-text"> ₹{ele.price} </p>
                  <button  onClick={() =>dispatch(addTocart(ele))}className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
              </div>
              
            })
        }
    </div>
  )
}

export default Card