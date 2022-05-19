function Spa(){
    return (
        <HashRouter>
        <NavBar/>
            <UserContext.Provider value={{users:[{name: 'Jake', email: 'developer@jakedigby.com', password: 'secret', balance: 300}]}}>
                <Routes>
                    <div className="container" style={{padding: "20px"}}>
                        <Route path="/" exact element={home} />
                        <Route path="/CreateAccount/" element={CreateAccount} />
                        <Route path="/login/" element={Login} />
                        <Route path="/deposit/" element={Deposit} />
                        <Route path="/withdraw/" element={Withdraw} />
                        <Route path="/balance/" element={Balance} />
                        <Route path="/alldata/" element={AllData} />
                    </div>
                </Routes>
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)