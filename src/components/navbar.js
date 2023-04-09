import React from 'react'

export default function Navbar({ title }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#ccced4' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/"><strong>{title}</strong></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/">Disabled</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
