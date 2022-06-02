function Login(){
    const [show, setShow]           = React.useState(true);
    const [email, setEmail]         = React.useState('');
    const [password, setPassword]   = React.useState('');
    const [require, setRequire]     = React.useState('');
    const ctx                       = React.useContext(UserContext);
    
    function validate(field, label){
        if (!field) {
          setRequire('Please enter ' + label);
          setTimeout(() => setRequire(''), 3000);
          return false;
        }
        return true;
    }

    function handleLogin(){
        console.log(email,password);
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        let loginData = ctx.users.filter(item => item.email === email && item.password === password);
            if (loginData.length < 1) {
                setRequire('no account associated with that email/password combination');
                setTimeout(() => setRequire(''), 4000);
                return;
            }
        let name = loginData[0].name; setEmail(loginData.email);
        ctx.actions.push({name,email,action:"Login",stamp: new Date().toString()});
        ctx.session=({name,email,balance:loginData[0].balance});
        setShow(false);
      }

    return (
        <Card
        bgcolor="secondary"
        header="Login"
        require={require}
        body={show ? (  
            <>
            Email<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e =>setEmail(e.currentTarget.value)} required/>
            Password<br/>
            <input type="input" minLength="8" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e =>setPassword(e.currentTarget.value)} required />
            <button disabled={!email && !password} type="submit" className="btn btn-dark" onClick={handleLogin} style={{margin: "10px"}}>Login</button> 
            </>
              ):(
                <>
                <h5>Your Account Session has been Succesfully Started</h5>
                  <button type="submit" className="btn btn-dark" onClick={event => location.href='#/deposit/'}>Deposit</button>
                  <button type="submit" className="btn btn-dark" onClick={event => location.href='#/withdraw/'} style={{margin: "10px"}}>Withdraw</button>
                </>
              )}
      />

        // <h1>Login<br/>
        //     {JSON.stringify(ctx)}</h1>
    )
}