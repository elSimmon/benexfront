import {Container} from "react-bootstrap";
import Logo from "../../img/benexlogo.png";
import Binance from "../../img/binance.png";

function Footer(){
    return(
        <div>
            <div className={"footer"}>
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-3"}>
                            <h5 className={"footer_heading"}>Company</h5>
                            <ul className={"footer_links"}>
                                <li>About</li>
                                <li>Supported Currencies</li>
                                <li>Reviews</li>
                                <li>Partners</li>
                            </ul>
                        </div>
                        <div className={"col-md-3"}>
                            <h5 className={"footer_heading"}>Support</h5>
                            <ul className={"footer_links"}>
                                <li>FAQs</li>
                                <li>Help Desk</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className={"col-md-3"}>
                            <h5 className={"footer_heading"}>Legal</h5>
                            <ul className={"footer_links"}>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className={"col-md-3"}>
                            <img
                                src={Binance}
                                width="250"
                                height="120"
                                className="d-inline-block align-top"
                                alt="Benex Logo"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default Footer