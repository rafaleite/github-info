import React from 'react'

const Main = ()=> {
    return (
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
    )
}

export default Main