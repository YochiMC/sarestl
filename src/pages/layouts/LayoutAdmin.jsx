import Header from '../../components/HeaderInterno';
import Footer from '../../components/Footer';
import '../../assets/styles/crud.css'
import '../../assets/styles/notificaciones.css'
import '../../assets/styles/modalA.css'

export function LayoutAdmin({ children }) {
    return (
        <>
            <Header />
            <div>ESPACIO PARA EL MENÚ</div>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}   