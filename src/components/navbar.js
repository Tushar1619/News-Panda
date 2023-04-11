import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar({ title }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#ccced4' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/"><strong>{title}</strong></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
