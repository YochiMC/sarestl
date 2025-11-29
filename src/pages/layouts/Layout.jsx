import '../../assets/styles/layout.css'
import {Header} from '../../components/Header'
export function Layout({ children }) {
    return (
        <>
            <header className='stl-header'> Aquí va el fokin header </header>
            <div>
                {children}
            </div>
            <footer className='stl-footer'> Aquí va el fokin footer </footer>
        </>
    )
}   