import React from 'react'


const Cesta = () => {
    const cesta = JSON.parse(localStorage.getItem('datos'))

    const listaProducto = cesta?.map((elemento,idx)=> (
      <div className='listProd' key={idx}>
        <div className='listProd'>
  
           <h1> {elemento.Name}  </h1> 
  
           <p> {elemento.price} </p>
        </div>
      </div>
    ))
  
      return (
   
        <p>{listaProducto}</p>
  
      )
}

export default Cesta