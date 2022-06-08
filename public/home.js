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
        header="BadBank"
        title="Welcome to the Bank"
        text="Now with little to no security! please enjoy!"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    )
}