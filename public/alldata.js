function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        // fetch all accoounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);
    
    return (
        <>
        <h5>AllData</h5>
        {data}
        </>
    );
}