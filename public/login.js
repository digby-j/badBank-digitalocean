function Login(props){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="primary"
            header="Login"
            status={status}
            body={show ?
            <CreateLoginForm setUser={props.setUser} setShow={setShow} setStatus={setStatus}/> :
            <CreateLoginMsg setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function CreateLoginMsg(props) {
    return (<>
    <h5>Success</h5>
    <button type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}>Sign Out</button>
    </>);
}

function CreateLoginForm(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handle() {
        // console.log(email,password);
        // ctx.users.push({email,password});
        // props.setShow(false);
        fetch(`/account/login/${email}/${password}`)
        .then(response => response.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                props.setStatus('');
                props.setShow(false);
                props.setUser(data);
                console.log('JSON:', data);
            } catch(err) {
                props.setStatus(text)
                console.log('err:', text);
            }
        });
    }

    return (<>

    Email Address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>

    Password<br/>
    <input type="password"
    className="form-control"
    placeholder="Enter password"
    value={password}
    onChange={e => setPassword(e.currentTarget.value)} /><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Login</button>

    </>);

}