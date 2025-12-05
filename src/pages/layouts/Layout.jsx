import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/styles/layout.css'
import '../../assets/styles/login.css'
import '../../assets/styles/contraseña.css'
import '../../assets/styles/manualUsuario.css'
import '../../assets/styles/mas.css'

export function Layout({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}   