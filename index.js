function Spa(){
    return (
        <HashRouter>
            <NavBar/>
                <UserContext.Provider value={{users:[]}}>
                        <div className="container" style={{padding: "20px"}}>
                            <Route path="/" exact component={Home} />
                            <Route path="/CreateAccount/" component={CreateAccount} />
                            <Route path="/Login/" component={Login} />
                            <Route path="/Deposit/" component={Deposit} />
                            <Route path="/Withdraw/" component={Withdraw} />
                            <Route path="/Balance/" component={Balance} />
                            <Route path="/AllData/" component={AllData} />
                        </div>
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)