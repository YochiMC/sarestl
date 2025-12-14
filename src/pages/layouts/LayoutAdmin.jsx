import Header from '../../components/HeaderInterno';
import Footer from '../../components/Footer';
import { Menu } from '../../components/Menu';
import '../../assets/styles/crud.css'
import '../../assets/styles/notificaciones.css'
import '../../assets/styles/modalA.css'

const role = "alumno"

export function LayoutAdmin({ children }) {

    const menu = [
        { id: 1, linki: "/dashboard", name: "Dashboard" },
        { id: 2, linki: "/VisualizacionGeneral", name: "Visualizacion" },
        { id: 3, linki: "/ManualMiembros", name: "Manual de Usuario" }
    ]

    switch (role) {
        case "guardia":
            menu.push(
                { id: 4, linki: "/accesos", name: "Accesos" },
                { id: 5, linki: "/historial-registros-usuarios", name: "Registros" },
            )
            break;
        case "admin":
            menu.push(
                {id: 4, linki: "/crud", name: "Usuarios"},
            )
            break;
        default:
            break;
    }

    return (
        <>
            <Header />
            <Menu listItems={menu} />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}   