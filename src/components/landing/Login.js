import {Card, Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user_info')){
            navigate('/dashboard');
        }
    },[]);

    async function signIn(){
        let item={email,password};
        console.warn(item);

        let result = await fetch('http://localhost:8000/api/login', {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        result = await result.json();
        // console.warn(result);
        localStorage.setItem('user_info',JSON.stringify(result));
        navigate('/dashboard');
    }

    return(
        <div>
            <div className="hero">
                <Container>
                    <div className={"row"}>
                        <div className={"col-md-6 offset-3"}>
                            <Card className={"login_box"}>
                                <Card.Header><b><center><h4>Benex Account Login</h4><p>Welcome back to sign in with Username or Email</p></center></b></Card.Header>
                                <Card.Body>
                                    <input type={"text"} placeholder={"Email"} className={"swap_form_input"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    <input type={"password"} placeholder={"Password"} className={"swap_form_input"} value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
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