function Withdraw(){
    const ctx = React.useContext(UserContext);

    function handle(data){
        ctx.user.push({name:data.name,email:data.email,password:data.password,balance:100});
        return true;
    }

    return (
        <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        hideAmount={true}
        successButton="Add Another Account"
        />
    )
}