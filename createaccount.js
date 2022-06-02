function CreateAccount(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [name, setName]           = React.useState('');
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

    function availableData(email) {
        let userData = ctx.users.filter(item => item.email === email);
        return userData.length;
    }
  
    function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      if (availableData(email) > 0) {
          setRequire('There appears to be an account with those credentials, please login');
          setTimeout(() => setRequire(''), 3000);
          return;
      }
 
      if (password.length < 8) {
          setRequire('Password must have eight characters, please try again');
          setTimeout(() => setRequire(''), 3000);
          return;
      }
      ctx.actions.push({name,email,action:"Create Account",stamp: new Date().toString()});
      ctx.users.push({name,email,password,balance: 100});
      setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

    return (
      <Card
        bgcolor="primary"
        txtcolor="light"
        header="Create Account"
        status={status}
        require={require}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required/><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required/><br/>
                Password<br/>
                <input type="password" minLength='8' className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required/><br/>
                <div id="passError" value="test">
                  <button type="submit" disabled={!name && !email && !password} id="create" className="btn btn-light" onClick={handleCreate} style={{margin: "10px"}}>Create Account</button>
                </div>
                </>
              ):(
                <>
                <h5 style={{margin: "10px"}}>Welcome to the Bad Bank, {name}!</h5><br/>
                <p style={{margin: "10px"}}>Account Successfully Created!</p><br/>
                <button type="submit" className="btn btn-light" onClick={clearForm} style={{margin: "10px"}}>Add another account</button><br/>
                <button type="submit" className="btn btn-light" onClick={event => location.href='#/login/'} style={{margin: "10px"}}>Login</button><br/>
                </>
              )}
      />
    )
  }