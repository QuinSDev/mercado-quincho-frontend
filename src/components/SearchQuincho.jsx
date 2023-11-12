import home from "../assets/images/home.png"
import chalet from "../assets/images/chalet.png"
import quinta from "../assets/images/quinta.png"
import cabaña from "../assets/images/cabaña.png"

export const SearchQuincho = ({ types, filterType }) => {

    const typeIcons = {
        "Todos": <img
            className="h-10 w-10"
            src={home}
            alt="Logo de quinchos"
        />,
        "Chalets": <img
            className="h-10 w-10"
            src={chalet}
            alt="Logo de chalets"
        />,
        "Quintas": <img
            className="h-10 w-10"
            src={quinta}
            alt="Logo de quintas"
        />,
        "Cabañas": <img
            className="h-10 w-10"
            src={cabaña}
            alt="Logo de cabañas"
        />,
    };

    return (
        <>
            <div data-theme="light" className="mt-10 md:flex md:items-center md:justify-center bg-white">
                <ul className="shadow-lg m-4 menu bg-base-200 lg:menu-horizontal rounded-box">
                    {types.map(type => (

                        <li className="font-semibold text-lg hover:bg-[#35C5DF] rounded-md" >
                            <a onClick={() => filterType(type)}
                                key={type} >
                                {typeIcons[type]}
                                {type}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
