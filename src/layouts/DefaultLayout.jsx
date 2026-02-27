import { Outlet } from "react-router-dom"
import MainHeader from "../components/MainHeader"


function DefaultLayout() {
    return (
        <>
            <MainHeader /> {/* Componente sempre visibile */}
            <Outlet /> {/* Segnaposto per il contenuto dinamico in base alla rotta corrente */}
        </>
    )
}

export default DefaultLayout