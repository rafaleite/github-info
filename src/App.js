import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
              <div className="col-lg-4">
               
                <a className="navbar-brand" href="/">
                  Buscar Profiles do GitHub
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" 
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse float-right col-lg-3" id="navbarsExampleDefault">
                <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                  <input className="form-control" type="text" placeholder="username" aria-label="username" />
                  <div className="input-group-append">
                  <button className="btn btn-secondary" type="submit">buscar</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </nav>
        </header>

        <main role="main" className="container">
          <div className="row">
            <div className="col-3 mt-3">
              <img src="https://avatars1.githubusercontent.com/u/4439856?v=4" alt="250x250" className="img-thumbnail profile-img"  />
              <h3 className="font-weight-bold mt-2">Rafael Leite</h3>
              <p className="lead">rafaleite</p>
            </div>
            <div className="col-9 mt-3">
              <p className="break-line">Repositórios <span className="badge badge-pill badge-info">15</span></p>

              <div className="row ml-2">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Projeto</th>
                      <th scope="col">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>redux-saga-test</td>
                      <td>dasdasd sdasdasdasd daasdasdasd dasdasdasd asdasd</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Busca de profiles do github utilizando React + Redux Saga</span>
          </div>
        </footer>

      </div>
      
    )
  }
}

export default App;
