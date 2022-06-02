function Home(){
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="The Bad Bank"
      title="Welcome to the bank"
      text="Now with little to no secutity, for your benefit"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}