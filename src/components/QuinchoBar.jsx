import React from 'react'
import { useState } from 'react'
import { data } from '../api/Quinchos'
import { SearchQuincho } from './SearchQuincho'
import { CardQuincho } from './CardQuincho'

export const QuinchoBar = () => {

    const allTypes = ['Todos' , ...new Set(data.map(quincho => quincho.typeQuincho))]

    const [types, setTypes] = useState(allTypes);
    const [quinchos, setQuinchos] = useState(data);

    const filterType = (type) => {
        if (type === 'Todos'){
            setQuinchos(data)
            return
        }

        const filterData = data.filter(quincho => quincho.typeQuincho === type);
        setQuinchos(filterData)

    }

  return (
    <>
    <SearchQuincho types={types} filterType={filterType}/>
    <CardQuincho quinchos={quinchos}/>
    
    </>

    )
}

  