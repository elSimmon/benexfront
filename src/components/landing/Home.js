import Laptop from '../../img/laptop1.png';
import {Button, Card, Container} from "react-bootstrap";
import Playstore from '../../img/playstore.png';
import Appstore from '../../img/appstore.png';
import { Player } from 'video-react';

function Home(){
    return(
        <div>
            <div className="hero">
                <Container>
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
                </Container>
            </div>
            <div className={"live_feed_home"}>
                <Container>
                <div className={"row"}>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                    <div className={"col-md-2"}>
                        {/*<p>BTC/NGN</p>*/}
                        <h4>25,254,522</h4>
                        <p>N43,000,577</p>
                    </div>
                </div>
                </Container>
            </div>
            <Container>
            <div className={"live_freely_home"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <h2>Live freely with Benex. It's all about FREEDOM! </h2>
                        <p>Swap send or spend Crypto for FREE with your Benex Account.</p>
                    </div>
                    <div className={"col-md-3"}>
                        <img
                            src={Playstore}
                            width="200"
                            height="78"
                            className="di-fluid"
                            alt="Benex Interface"
                        />
                    </div>
                    <div className={"col-md-3"}>
                        <img
                            src={Appstore}
                            width="200"
                            height="68"
                            className="di-fluid"
                            alt="Benex Interface"
                        />
                    </div>
                </div>
            </div>
            </Container>
            <div className={"video_area_home"}>
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <Player
                                playsInline
                                poster="../../img/binance.png"
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            />
                        </div>
                        <div className={"col-md-6"}>
                            <h2>The Benex Way</h2>
                            <h4>Alot of people have gone THE BENEX WAY because when you go the Benex Way, you go ALL THE WAY. Let us go the benex way, let us go all the way</h4>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <Button className={"btn_send_home"} variant={"outline-primary"}>Send</Button>
                        </div>
                        <div className={"col-md-6"}>
                            <Button className={"btn_swap_home"} variant={"outline-warning"}>Swap</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;