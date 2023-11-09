import React from 'react'

export const NavBarAdm = () => {
    return (

        <>
            <div data-theme="light" className='mt-4'>
                <div className="lg:flex lg:items-center lg:justify-between bg-white">

                    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box ml-8">
                        <li className="text-lg hover:bg-[#35C5DF] rounded-md">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>


                                Usuarios

                            </a>
                        </li>
                        <li className="text-lg hover:bg-[#35C5DF] rounded-md">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                Quinchos

                            </a>
                        </li>

                    </ul>

                    <div className="m-10 flex lg:ml-4 lg:mt-8">
                    <h1 className='text-xl font-semibold'>
                        Panel de Control
                    </h1>
                    </div>

                </div>
            </div>
        </>
    )
}
