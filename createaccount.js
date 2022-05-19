function CreateAccount(){
    return (
        <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div className="card-header">Create Account</div>
            <div className="card-body">
                Name<br>
                <input type="input" className="form-control" id="name" placeholder="Enter name"><br>
                Email address<br>
                <input type="input" className="form-control" id="email" placeholder="Enter email"><br>
                Password<br>
                <input type="input" className="form-control" id="password" placeholder="Enter password"><br>
                <button type="submit" id="submit" className="btn btn-primary" onclick="create()">Create Account</button>
                <div id="createStatus"></div>
            </div>
        </div>
    );
}