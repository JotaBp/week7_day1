import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="menu">
            <img src="https://cosasdigitales.com/wp-content/uploads/2016/11/cosas-digitales-logo-negro-700.png" alt="Logo" />
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/nosotros">Nosotros</a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header