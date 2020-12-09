import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from "./firebase"
import "./Login.css"

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://cdn.osxdaily.com/wp-content/uploads/2014/11/mac-messages-icon-300x276.jpg"></img>
            <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
