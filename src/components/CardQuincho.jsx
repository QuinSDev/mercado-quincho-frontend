import React from 'react'

export const CardQuincho = ({quinchos}) => {
  return (

    <div data-theme="light" className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Quinchos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {quinchos.map((quincho) => (

                <div key={quincho.id} className="group relative">

                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={quincho.image}
                            alt="imagen del quincho"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                        <span aria-hidden="true" className="absolute inset-3 p-2" >
                            <div className="rating">
                                <input type="radio" name="rating-3" className="mask mask-heart" checked />
                            </div>

                        </span>

                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>

                            <p className="mt-1 text-l font-semibold text-gray-900">{quincho.nameQuincho}</p>

                            <p className="mt-1 text-sm text-gray-500">{quincho.location}</p>
                            <p className="mt-1 text-sm font-medium text-gray-900">$ {quincho.price} Por Noche</p>


                            <button className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2">Ver Quincho</button>


                        </div>

                    </div>
                </div>

            ))}


        </div>
    </div>
</div>
  )
}
