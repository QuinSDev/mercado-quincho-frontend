import React from 'react'

export const SearchFilter = () => {
    return (
        <>

            <div className="mr-10 flex lg:ml-4 lg:mt-8">
                <span className="hidden sm:block">

                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-l font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" className="w-full max-w-[180px] bg-white pl-2 text-base font-semibold outline-0" placeholder="Buscar" id="" />


                        <select className="select-bordered join-item text-gray-400 bg-white">
                            <option disabled selected className="bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold">Filtro</option>
                            <option className="bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold">Ubicación</option>
                            <option className="bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold">Nombre del quincho</option>
                            <option className="bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold">Precio</option>
                        </select>

                    </button>
                </span>

            </div>
        </>
    )
}
