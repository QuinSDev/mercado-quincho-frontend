import React, { useState } from 'react'
import { SearchQuincho } from './SearchQuincho'
import { data } from "../api/Quinchos";
import { CardQuincho } from './CardQuincho';

export const QuinchoBar = () => {


    const allTypes = ['Todos', ...new Set(data.map(quincho => quincho.typeQuincho)),];
   

    const [types, setTypes] = useState(allTypes);
    const [quinchos, setQuinchos] = useState(data);
   

    const filterType = (type) => {
        if (type === 'Todos') {
            setQuinchos(data)
            return
        }

        const filteredData = data.filter(quincho => quincho.typeQuincho === type);
        setQuinchos(filteredData)
    };


    return (
        <>
            <div data-theme="light">

                <SearchQuincho types={types} filterType={filterType}/>
                <CardQuincho quinchos={quinchos} />

            </div>
        </>
    )
}
