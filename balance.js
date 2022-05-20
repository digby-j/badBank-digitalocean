function Balance(){
    const ctx = React.userContext(UserContext);
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