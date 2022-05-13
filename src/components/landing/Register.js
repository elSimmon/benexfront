import {Card, Container} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user_info')){
            navigate('/');
        }
    },[]);

    async function signUp(){
        let item={name,email,phone,password};
        console.warn(item);

        let result = await fetch('http://localhost:8000/api/register', {
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
                                <Card.Header><b><center><h4>Benex Account Creation</h4><p>Welcome Fill your details correctly</p></center></b>
                                </Card.Header>
                                <Card.Body>
                                    <input type={"text"} placeholder={"Username"} className={"swap_form_input"} value={name} onChange={(e)=>setName(e.target.value)}/>

                                    <input type={"email"} placeholder={"Email Address"} className={"swap_form_input"} value={email} onChange={(e)=>setEmail(e.target.value)}/>

                                    <input type={"phone"} placeholder={"Phone number"} className={"swap_form_input"} value={phone} onChange={(e)=>setPhone(e.target.value)}/>

                                    <input type={"password"} placeholder={"Password"} className={"swap_form_input"} value={password} onChange={(e)=>setPassword(e.target.value)} />

                                    <input type={"password"} placeholder={"Password Repeat"} className={"swap_form_input"} /><br/>
                                    <button type={"submit"} onClick={signUp} className={"swap_button"}>Create Account</button>
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