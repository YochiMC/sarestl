import '../../assets/styles/layout.css'
import { Header } from '../../components/Header'
export function Layout({ children }) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <footer className='stl-footer'> Aquí va el fokin footer </footer>
        </>
    )
}   