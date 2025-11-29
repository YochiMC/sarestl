import '../../assets/styles/layout.css'
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