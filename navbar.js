function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a  className="navbar-brand" href="#" title="Proceed Home - Bad Bank">BadBank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#/CreateAccount/" title="Proceed to Account Creation - Create Account">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/login/" title="Proceed to Login - Login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/" title="Proceed to Deposit - Deposit">Deposit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/" title="Proceed to Withdraw - Withdraw">Withdraw</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/" title="View All Data - User Session Data">AllData</a>
              </li>          
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
  }