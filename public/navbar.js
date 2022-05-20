function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#login" onclick="loadLogin()" id="login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#deposit" onclick="loadDeposit()" id="deposit">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#withdraw" onclick="loadWithdraw()" id="withdraw">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#balance" onclick="loadBalance()" id="balance">Balance</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#alldata" onclick="loadAllData()" id="alldata">AllData</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}