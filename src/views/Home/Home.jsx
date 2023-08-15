import Banner from "../../components/Banner/Banner"
import Cabecera from "../../components/Cabecera/Cabecera"
import Nav from "../../components/Nav/Nav"
import Nosotros from "../../components/Nosotros/Nosotros"
import Revenue from "../../components/Revenue/Revenue"

export default function Home(){
    return(
        <>
        <header>
        <Nav/>
        </header>
        <main>
        <Cabecera/>
        <Nosotros/>
        <Banner/>
        <Revenue/>
        </main>
        </>
    )
}