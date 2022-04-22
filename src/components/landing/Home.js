import Laptop from '../../img/laptop1.png';
import Logo from "../../img/benexlogo.png";
import {Button, Card, Container} from "react-bootstrap";

function Home(){
    return(
        <div>
            <div className="hero">
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <Card className={"swap_form"}>
                            <Card.Header>Floating Rate || Fixed Rate</Card.Header>
                            <Card.Body>
                                <input type={"text"} placeholder={"You Send"} className={"swap_form_input"} value={"0.001 BTC"}/>
                                <input type={"text"} placeholder={"You Get"} className={"swap_form_input"} value={"2000 NGN"}/><br/>
                                <button className={"swap_button"}>Swap</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={"col-md-6"}>
                        <img
                            src={Laptop}
                            width="600"
                            height="368"
                            className="di-fluid"
                            alt="Benex Interface"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;