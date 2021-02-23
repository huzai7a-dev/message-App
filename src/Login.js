import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import React, { useEffect, useState } from 'react';
import './login.css';

function Login({name}) {
    const [login,setLogin] = useState("");
        const handleLogin=(e)=>{
            e.preventDefault();
            name(login);    
        }
    return (
        <div className="Login">
        <h1>React Chat</h1>
        <form className="login__form">
            <FormControl className="login__formcontrol">
            <InputLabel>Enter name</InputLabel>
            <Input type="text" value={login} onChange={(e)=>{setLogin(e.target.value)}} />
            <Button disabled={!login} variant="contained" color="primary" type="submit" onClick={handleLogin}>Next</Button>
            </FormControl>
        </form>
        </div>
    )
}

export default Login
