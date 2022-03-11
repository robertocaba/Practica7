import React from 'react'
import SillaB from '../Imagen/SillaB.png';
import Mesa2 from '../Imagen/Mesa2.png';


const Casa = () => {
    return (
        <div className='listNews'>
       
          <div className='listNew'>
           <h2> Silla balancin</h2>
           <img src={SillaB} className='img' alt="Silla" />
           <h2>300€</h2>
          </div>
          <div className='listNew'>
           <h2> Mesa redonda</h2>
           <img src={Mesa2} className='img' alt="Mesa" />
           <h2>304€</h2> 
          </div>
          
        </div>
      )
    
}

export default Casa