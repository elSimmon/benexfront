import Frontman from '../../img/benex_front_man.png';
import {Button, Card, Container, Nav} from "react-bootstrap";
import Playstore from '../../img/playstore.png';
import Appstore from '../../img/appstore.png';
import { Player } from 'video-react';
import Video from '../../img/istock1.mp4';
import Youtube from '../../img/youtube.png';
import {useState, useEffect} from "react";
import axios from 'axios';

function Home(){
    const [coins, getCoins] = useState([]);
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=6&page=1&sparkline=false\n";

    // useEffect(()=>{
    //     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=100&page=1&sparkline=false\n').then(res =>{
    //         setCoins(res.data);
    //     }).catch(error =>console.log(error))
    // }, []);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getCoins(response);
            })

    }

    const [active, setActive] = useState("firstCard");
    return(
        <div>
            <div className="hero">
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <Nav>
                                <Button onClick={()=> setActive("firstCard")} variant="outline-light" size={'lg'}>Swap&raquo;&laquo;</Button>&nbsp;&nbsp;
                                <Button onClick={()=> setActive("secondCard")} variant="outline-light" size={'lg'}>Send&raquo;&raquo;</Button>
                            </Nav><br/><br/>
                            <center>
                                {active === "firstCard" && <Card className={"swap_form"}>
                                    <Card.Header className={"text-primary"}>
                                        <h5>
                                            <form>
                                                <input type={"radio"} value={"Floating Rate"}/>Floating Rate
                                                <input type={"radio"} value={"Fixed Rate"} />Fixed Rate
                                            </form>
                                        </h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <input type={"text"} placeholder={"You Send"} className={"swap_form_input"} value={"0.001 BTC"}/>
                                        <input type={"text"} placeholder={"You Get"} className={"swap_form_input"} value={"2000 NGN"}/><br/>
                                        <button className={"swap_button"}>Swap</button>
                                    </Card.Body>
                                    <Card.Footer>Swap Crypto</Card.Footer>
                                </Card>}
                                {active === "secondCard" && <Card className={"swap_form"}>
                                    <Card.Header className={" text-primary"}>
                                        <h5>
                                            <form>
                                                <input type={"radio"} value={"Floating Rate"}/>Floating Rate
                                                <input type={"radio"} value={"Fixed Rate"} />Fixed Rate
                                            </form>
                                        </h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <input type={"text"} placeholder={"You Send"} className={"swap_form_input"} value={"0.001 BTC"}/>
                                        <input type={"text"} placeholder={"You Get"} className={"swap_form_input"} value={"2000 NGN"}/><br/>
                                        <button className={"swap_button"}>Send</button>
                                    </Card.Body>
                                    <Card.Footer>Send Crypto</Card.Footer>
                                </Card>}
                            </center>
                        </div>
                        <div className={"col-md-6"}>
                            <center>
                                <img
                                    src={Frontman}
                                    width="280"
                                    height="400"
                                    className="di-fluid front_man"
                                    alt="Benex Interface"
                                />
                            </center>
                        </div>
                    </div>
                </Container>
            </div>
            <div className={"live_feed_home"}>
                <Container>
                <div className={"row"}>
                    {coins.map((coin, i) => {
                        // return <div className={"col-md-2"} key={i}>
                        //     <p>{coin.symbol}/NGN</p>
                        //     <h4>${coin.circulating_supply}</h4>
                        //     <p>N{coin.current_price}</p>
                        // </div>
                        return <div className={"col-md-2"} key={i}>
                         <table className={"table table-responsive table-borderless text-light"}>
                             <tr>
                                 <th rowSpan="3">
                                     <img
                                     src={coin.image}
                                     width="60"
                                     height="60"
                                     className="di-fluid"
                                     alt="Coin Image"/>
                                 </th>
                                 <td>{coin.name}</td>
                             </tr>
                             <tr>
                                 <td>N{(coin.current_price).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                             </tr>
                             <tr>
                                <td>
                                    {coin.price_change_percentage_24h < 0
                                        ?
                                        <>
                                            <span className={"coin_negative"}>{coin.price_change_percentage_24h}
                                            </span>
                                        </>
                                        :
                                        <>
                                            <span className={"coin_positive"}>+{coin.price_change_percentage_24h}
                                            </span>
                                        </>
                                    }%</td>
                            </tr>
                        </table>
                        </div>
                    })}
                </div>
                </Container>
            </div>
            <Container>
            <div className={"live_freely_home"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <b><h2>Live freely with Benex. It's all about FREEDOM! </h2>
                            <p>Swap send or spend Crypto for FREE with your Benex Account.</p></b>
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
                                poster={Youtube}
                                src={Video}
                            />
                        </div>
                        <div className={"col-md-6"}>
                            <h2>The Benex Way</h2>
                            <h5>Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot. Why did this happen?

                                IP address: 197.211.52.32
                                Time: 2022-04-25T10:13:10Z
                                URL: https://www.google.com/search?q=yarn&oq=yarn&aqs=chrome..69i57j0i271l2.5</h5>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6"}>
                            <button className={"btn_send_home"}>Send</button>
                        </div>
                        <div className={"col-md-6"}>
                            <button className={"btn_swap_home"}>Swap</button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Home;