import {Card, Container} from "react-bootstrap";

function Register(){
    return(
        <div>
            <div className="hero">
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-6 offset-3"}>
                            <Card className={"login_box"}>
                                <Card.Header><b><center><h4>Benex Account Creation</h4><p>Welcome Fill your details correctly</p></center></b>
                                </Card.Header>
                                <Card.Body>
                                    <input type={"text"} placeholder={"Username"} className={"swap_form_input"} />
                                    <input type={"email"} placeholder={"Email Address"} className={"swap_form_input"} />
                                    <input type={"phone"} placeholder={"Phone number"} className={"swap_form_input"} />
                                    <input type={"password"} placeholder={"Password"} className={"swap_form_input"} /><br/>
                                    <button className={"swap_button"}>Create Account</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Register;