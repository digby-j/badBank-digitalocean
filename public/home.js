// function Home(){
//     return(
//         <h1>Home component</h1>
//     );
// }

function Home(){
    return (
        <Card
        txtcolor="black"
        bgcolor="light"
        header="Welcome to The Bad Bank"
        text="Now with less security!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    )
}