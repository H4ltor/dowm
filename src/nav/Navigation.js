import "./Navigation.css"
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import logo from '../../../dowm/src/assets/logo_blanc.png';
import {Link} from "react-router-dom";
export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="logo-image">
                            <img src={logo} alt="Logo" className="img-fluid"></img>
                        </div>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{color: "white"}}>DYNASTY OF WO/MEN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/valeurs">VALEURS </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}