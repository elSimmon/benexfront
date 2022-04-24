import {Card, Container} from "react-bootstrap";

function Login(){
    return(
        <div>
            <div className="hero">
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-6 offset-3"}>
                            <Card className={"login_box"}>
                                <Card.Header><h4>Benex Account Login</h4><p>Welcome back to sign in with Username or Email</p></Card.Header>
                                <Card.Body>
                                    <input type={"text"} placeholder={"Username"} className={"swap_form_input"} />
                                    <input type={"password"} placeholder={"Password"} className={"swap_form_input"} /><br/>
                                    <button className={"swap_button"}>Login</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Login;