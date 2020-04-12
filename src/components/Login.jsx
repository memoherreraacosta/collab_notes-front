import React from 'react';

function Login() {
    const login = () =>{
        console.log("here")
        const login_url = process.env.REACT_APP_BACKEND_URL + '/login'
        fetch(login_url, {'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(response => response.json())
        .then(data => console.log(data));
    }
    return (
    <div className="Login">
        This is the login page
        <button onClick={() => loginWithRedirect({})} >Log In</button>
    </div>
    );
}

export default Login;
