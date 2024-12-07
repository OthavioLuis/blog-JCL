import './Header.css';
import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg"

const Header = () => {
    return (
        <header>
            <div className='cx-header'>
                <div>
                    <Link to="/">
                        <img src={logo} alt="logo" width="100" height="100" />
                    </Link>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/Temas">Temas</Link></li>
                        <li><Link to="/Usuario">Usuário</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;