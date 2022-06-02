function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState('');
  const [caution, setCaution] = React.useState('');
  const [transactionAmount, setTransactionAmount] = React.useState('')
  const [balance, setBalance] = React.useState(ctx.session.balance);


  function handleWdraw(){
    if(Math.sign(Number(transactionAmount)) === 1 || Math.sign(Number(transactionAmount)) === 0){
      if (Number(transactionAmount) > Number(balance)) {
        setCaution('Please try a smaller amount');
        setTimeout(() => setCaution(''), 3000);
        return;
      }
      setBalance(Number(balance) - Number(transactionAmount));
      ctx.session.balance = Number(ctx.session.balance) - Number(transactionAmount);
      let name = ctx.session.name;
      let email = ctx.session.email;
      setStatus('Withdraw successful!')
      setTimeout(() => setStatus(''), 3000); 
      setTransactionAmount('');
      updateUser(email);
      ctx.actions.push({name,email,action: "Withdraw",stamp: new Date().toString()});
    } else {
      setCaution('Please only add numbers and "."');
      setTransactionAmount('');
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
    bgcolor= "secondary"
    txtcolor = "light"
    header = "Withdraw"
    status={status}
    caution={caution}
    body = {Object.keys(ctx.session).length > 0 ? (
      <>
        <h4>Current Balance $ {balance}</h4>
        <input type="number" className="form-control" value={transactionAmount} onChange={e =>setTransactionAmount(e.currentTarget.value)} required/>
        <button disabled={!transactionAmount} type="submit" className="btn btn-dark" onClick={handleWdraw} style={{margin: "10px"}}>Withdraw</button>
      </>
    ):(
      <>
        <div>Oops! Look like you're not logged in!</div>
      </>
    )}
    /> 
  )
}
