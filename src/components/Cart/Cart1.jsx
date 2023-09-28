// import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux'
import image from "./../../image-product.jpg"
import { useNavigate } from 'react-router-dom'
import { removeItem, credit, reset } from '../../Redux/counterSlice'
// import { useState } from 'react'

const Cart1 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() //para enviar datos
    const creditProd = useSelector((state) => state.counter.amount) //envio contador monto de productos
    // const [isPossibleToBuy, setIsPossibleToBuy] = useState(null)


    const counts = useSelector((state) => state.counter.value) //estado contador de productos

    let sumTotal = counts.reduce((acumulador, actual) => acumulador + actual.price, 0);
    console.log(sumTotal)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center pb-5">Carrito</h1>
        {/* <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"> */}
            <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {counts.map((count) => (
                <li key={count.id} className="flex">
                  <div className="ml-4 flex flex-1 flex-col-4 justify-between sm:ml-6 flex justify-between items-center">
                    <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
                        <div>
                            <img
                              src={image}
                              alt={image}
                              className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm">
                                {count.title}
                            </h3>
                        </div>
                        <div className='flex justify-between items-center w-3/12'>
                            <p className="mt-1 text-sm font-medium text-gray-900">${count.price}</p>
                        </div>
                          <div className='flex justify-between items-center'>
                            <button type="buttonDelete" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => {console.log(count.id);
                                dispatch(removeItem(count.id))}
                              }>
                              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                          </div>
                        
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          
        {/* </form> */}
            <div className='w-7/12 mt-2 block max-w-sm p-6 bg-white border border-gray-200 w-6/12 flex justify-between dark:hover:bg-gray-700'>
            {/* <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'> */}
              TOTAL 
              <div className='font-bold'>
                $ {sumTotal}
              </div>
            </div>
            <div className="w-6/12 flex justify-between mt-10">
              <button
                type="submit"
                className="rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={()=>navigate("/")}
                >
                Volver al Catálogo
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={()=> {
                  if(sumTotal <= creditProd) {
                    dispatch(credit(sumTotal));
                    dispatch(reset());
                    navigate("/FinalCart",{state: {purchase:"La compra se realizó con éxito", buttonFinal:"Volver al catalogo"}})
                  } else {
                    navigate("/FinalCart",{state: {purchase:"Ocurrió un error con la compra, revisa que el importe no supere el crédito disponible en tu cuenta", buttonFinal:"volver al carrito"}})
                }}
              }
              >
                Finalizar Compra
              </button>
            </div>
      </div>
    </div>
  )
}
export default Cart1 