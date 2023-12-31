import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'

const FinalCart = () => {
const stateCart = useLocation();
const navigate = useNavigate()
const data = stateCart.state;

  return (
    <div className='flex flex-col items-center'>
        <h2 className='font-bold text-center text-2xl my-2'>Estado de Compra</h2>
        <div className='flex flex-col items-center border border-gray-800 p-8'>
            <span>{data.purchase} </span>
                <button className="w-full inline-block border rounded-md py-1 px-3 bg-black text-white hover:bg-violet-600" 
                onClick={() => {
                    if(data.buttonFinal === "Volver al catalogo"){
                        navigate('/')
                      }else {
                        navigate('/cart1')
                      }
                    }
                }>
                    {data.buttonFinal}
                </button>
        </div>
    </div>
)};

export default FinalCart