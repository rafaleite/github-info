import React from 'react'

const Header = ()=> {
    return (
        <header>
            <nav className="navbar navbar-dark fixed-top bg-dark">
                <div className="container">
                    <div className="col-lg-4">
                    <a className="navbar-brand" href="/">
                        Buscar Profiles do GitHub
                    </a>
                    </div>

                    <form className="form-inline my-2 my-lg-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="username" aria-label="username" />
                            <div className="input-group-append">
                            <button className="btn btn-secondary" type="submit">buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Header