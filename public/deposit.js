
function Deposit(){
    const [show, setShow]       = React.useState(true);
    const [status, setStatus]   = React.useState('');

    return (
        <Card
            bgcolor="primary"
            header="Deposit Amount"
            status={status}
            body={show ?
            <CreateDepositForm setShow={setShow}/> :
            <CreateDepositMsg setShow={setShow}/>}
        />
    )
}

function CreateDepositMsg(props) {
    return (<>
    <h5>Successfully deposited</h5>
    <button type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}>Make another Deposit</button>
    </>);
}

function CreateDepositForm(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handle() {
        console.log(name,email,deposit);
        ctx.users.push({name,email,deposit});
        props.setShow(false);
    }

    return (<>

    Name<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter name"
    value={name}
    onChange={e => setName(e.currentTarget.value)} /><br/>

    Email Address<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter email"
    value={email}
    onChange={e => setEmail(e.currentTarget.value)} /><br/>

    Deposit<br/>
    <input type="input"
    className="form-control"
    placeholder="Enter amount"
    value={deposit}
    onChange={e => setDeposit(e.currentTarget.value)} /><br/>

    <button type="submit"
    className="btn btn-light"
    onClick={handle}>Deposit</button>

    </>);

}