import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const data = useSelector((state) => state.counter.item);
  let sum =0;

  const dispatch =()=>{
    alert ("you can process further");
  }


  return (
    <>
    <table className="table">
  <thead>

    <tr>
      <th scope="col">Image</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((ele,id)=>{
        // upadting the Total Amount Here
        sum+= ele.price;

        return <tr key={id}>
        <td> <img src={ele.image} style={{width:"50px",height:"50px"}} alt="."/></td>
        <td>{ele.item}</td>
        <td>{ele.price}</td>
      </tr>
      })
    }
    
    </tbody>
    </table>
    <div className="checkout" style={{display:"flex",justifyContent:"space-around"}}>
      <span>Total Amount ={sum}</span>
      <button className='btn btn-primary' onClick={dispatch}>Chechout</button>
    </div>
  
  
  
  </>
  )
}

export default Cart