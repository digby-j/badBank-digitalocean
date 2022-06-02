function Deposit(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
    const [caution, setCaution] = React.useState('');
    const [transAmount, setTransAmount] = React.useState('')
    const [balance, setBalance] = React.useState(ctx.session.balance);
    
  
    function handleDeposit(){
        if(Math.sign(Number(transAmount)) === 1 || Math.sign(Number(transAmount)) === 0){
            setBalance(Number(balance) + Number(transAmount));
            ctx.session.balance = Number(ctx.session.balance) + Number(transAmount);
            setTransAmount('');
            let name = ctx.session.name;
            let email = ctx.session.email;
            updateUser(email);
            ctx.actions.push({name,email,action: "Deposit",stamp: new Date().toString()});
            setStatus('Your Transaction has Succesfully Completed')
            setTimeout(() => setStatus(''), 3000); 
        } else {
          setCaution('You have entered only numbers or decimals');
          setTransAmount('');
          setTimeout(() => setCaution(''), 3000);          
        }
    }
  
    function updateUser(email) {
      ctx.users.map((item) => {
        if (item.email === email) {
          item.balance = ctx.session.balance;
        }
      });
    }
  
    return ( 
      <Card 
      bgcolor="secondary"
      txtcolor="light"
      header="Deposit"
      status={status}
      caution={caution}
      body = {Object.keys(ctx.session).length > 0 ? (
        <>
          <h4>Your Current Balance is: ${balance}</h4>
          <input type="number" className="form-control" value={transAmount} onChange={e =>setTransAmount(e.currentTarget.value)} required/>
          <button disabled={!transAmount} type="submit" className="btn btn-dark" onClick={handleDeposit} style={{margin: "10px"}}>Deposit</button>
        </>
      ):(
        <>
        <div>Oops! Look like you're not logged in!</div>
        </>
      )}
      />
    )
  }
  