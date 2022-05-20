function AllData(){
    const ctx = React.useContext(userContext);
    return(
        <>
        <h1>All Data Component</h1>
        {JSON.stringify(ctx)}
        </>

    );
}