// CSS Style
import './Navbar.css'

// React components
import {useState} from "react";

// Router components
import {Link} from 'react-router-dom';

// Icons
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

function Navbar(){
    const [isMenuToggled, setMenuToggled] = useState(false);

    const toggleMenu = () => setMenuToggled(!isMenuToggled);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="menu">
                    <button className="menu-button" onClick={toggleMenu}>
                        {isMenuToggled ? <FiChevronDown /> : <FiChevronRight />}
                    </button>
                    {isMenuToggled &&
                        <div className="menu-content">
                            <Link to="/">Home</Link>
                        </div>
                    }
                </div>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-right">
                <Link to="/" />
            </div>
        </nav>
    );
}

export default Navbar;