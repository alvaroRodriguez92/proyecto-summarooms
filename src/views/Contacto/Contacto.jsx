
import Footer from "../../components/Footer/Footer";
import Formulario from "../../components/Formulario/Formulario";
import NavFormulario from "../../components/Nav/NavFormulario";


export default function Contacto() {
  return (
    <>
      <header>
        <NavFormulario />
      </header>
      <main>
        <Formulario/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
