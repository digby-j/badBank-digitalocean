function Home(){
    return (
        <Card
            txtcolor="black"
            bgcolor="secondary"
            header="Welcome to The Bad Bank"
            text="Now with less security!"
            body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />
    )
}