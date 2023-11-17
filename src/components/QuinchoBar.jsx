import React, { useEffect } from 'react'
import { useState } from 'react'
import { SearchQuincho } from './SearchQuincho'
import { CardQuincho } from './CardQuincho'


export const QuinchoBar = ({quinchos}) => {
    const [quinchos2, setQuinchos2] = useState([])
    const [types, setTypes] = useState(['Todos' , 'Chalet' , 'Quinta' , 'Cabaña']);

    useEffect(() => {
        // Actualiza quinchos2 cada vez que quinchos cambia
        setQuinchos2(quinchos);
      }, [quinchos]);
    
      const filterType = (type) => {
        if (type === 'Todos') {
          setQuinchos2(quinchos); // Restablece a la lista completa cuando se selecciona 'Todos'
        } else {
          const filterData = quinchos.filter((quincho) => quincho.typeQuincho === type);
          setQuinchos2(filterData);
        }
      };

    return (
        <>
            <SearchQuincho types={types} filterType={filterType} />
            <CardQuincho quinchos={quinchos2} />

        </>

    )
}