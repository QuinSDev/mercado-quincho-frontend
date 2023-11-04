import React, { useState } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const QuinchoForm = () => {

    const [formState, setFormState] = useState(
        {
            nameQuincho: '',
            location: '',
            description: '',
            price: '',
            typeQuincho: '',
            numGuest: '',
            numBed: '',
            numBedroom:'',
            numBathroom: '',
        }
    )

    const { nameQuincho, location, description, price, typeQuincho, numGuest, numBed, numBedroom, numBathroom } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
    }


    return (

        <>

            <form onSubmit={onSubmit} className="bg-white m-10 artboard-demo">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Tu Quincho</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Completa la informacion de tu Quincho.
                        </p>

                        <div className="mt-10 col-span-full">
                            <label htmlFor="nameQuincho" className="block text-sm font-medium leading-6 text-gray-900">
                                Nombre del Quincho
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nameQuincho"
                                    id="nameQuincho"
                                    value={nameQuincho}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                />
                            </div>

                            <label htmlFor="location" className="mt-6 block text-sm font-medium leading-6 text-gray-900 bg-white">
                                Direccion
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="location"
                                    id="location"
                                    value={location}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                />
                            </div>
                            <label htmlFor="description" className="mt-6 block text-sm font-medium leading-6 text-gray-900">
                                Descripcion
                            </label>
                            <div className="mt-2">
                                <input
                                    id="description"
                                    name="description"
                                    rows={3}
                                    value={description}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>

                            <label htmlFor="price" className="mt-6 block text-sm font-medium leading-6 text-gray-900">
                                Precio por noche
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={price}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                />
                            </div>

                            <label htmlFor="typeQuincho" className="mt-6 block text-sm font-medium leading-6 text-gray-900">
                                Tipo de Quincho
                            </label>

                            <div className="mt-2">
                                <select
                                    id="typeQuincho"
                                    name="typeQuincho"
                                    value={typeQuincho}
                                    onChange={onInputChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option>Chalet</option>
                                    <option>Quinta</option>
                                    <option>Casa con piscina</option>
                                </select>
                            </div>

                            <label htmlFor="photo" className="mt-6 block text-sm font-medium leading-6 text-gray-900">
                                Fotos
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-[#35C5DF] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#35C5DF] focus-within:ring-offset-2 hover:text-[#35C5DF]"
                                        >
                                            <span>Puedes subir hasta 5 fotos - PNG, JPG, GIF hasta 10MB</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file" className="sr-only" />
                                        </label>

                                    </div>

                                </div>
                            </div>

                        </div>



                        <div className="mt-10 border-t border-gray-900/10 pb-12">
                            <h2 className="mt-6 text-base font-semibold leading-7 text-gray-900">Servicios</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Completa las dependencias de tu Quincho</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Numero de huespedes
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="numGuest"
                                            id="numGuest"
                                            value={numGuest}
                                            onChange={onInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Numero de habitaciones
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="numBedroom"
                                            id="numBedroom"
                                            value={numBedroom}
                                            onChange={onInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Numero de Camas
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="numBed"
                                            id="numBed"
                                            value={numBed}
                                            onChange={onInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Numero de baños
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="numBathroom"
                                            id="numBathroom"
                                            value={numBathroom}
                                            onChange={onInputChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#35C5DF] sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="border-t border-gray-900/10 pb-12">
                            <h2 className="mt-6 text-base font-semibold leading-7 text-gray-900">Servicios Incluidos</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Servicios que ofrezcas a los clientes incluidos en el precio del alquiler
                            </p>

                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <div className="mt-0 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="lavarropas"
                                                    name="lavarropas"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-[#35C5DF] focus:ring-[#35C5DF]"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="comments" className="font-medium text-gray-900">
                                                    lavarropas
                                                </label>
                                                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-[#35C5DF] focus:ring-[#35C5DF]"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="candidates" className="font-medium text-gray-900">
                                                    Piscina
                                                </label>
                                                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-[#35C5DF] focus:ring-[#35C5DF]"
                                                />
                                            </div>
                                            <div className="text-sm leading-6">
                                                <label htmlFor="offers" className="font-medium text-gray-900">
                                                    Offers
                                                </label>
                                                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                        </div>


                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn bg-[#35C5DF] text-white hover:bg-black hover:text-white font-semibold px-3 py-1.5 rounded-md transition duration-300 mt-2"
                            >
                                Cargar tu Quincho
                            </button>
                        </div>


                    </div>
                </div>

            </form>

        </>

    )
}
