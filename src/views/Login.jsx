import React from "react";
import {Button, Form} from 'react-bootstrap';
import {connection_db} from './../utils/connection_db'
import md5 from 'md5'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        this.login = () => {
            const email = this.state.email
            const password = this.state.password
            console.log("here")
            if (validateEmail(email)) {
                console.log("here again")
                const hashed_pw = md5(password)
                const query = `SELECT * FROM \`collabnotes\`.\`ESTUDIANTE\` WHERE email='${email}' AND password='${hashed_pw}';`
                const x = connection_db(query, true)
                const promise1 = Promise.resolve(x);

                promise1.then((value) => {
                    console.log(value)
                    if (value.length < 1) {
                        alert("Invalid credentials")
                        return;
                    }
                    const user = value[0]
                    document.cookie = `id=${
                        user.idEstudiante
                    }; Path=/`
                    document.cookie = `name=${
                        user.nombre
                    }; Path=/`
                    document.cookie = `email=${
                        user.email
                    }; Path=/`
                    window.location.replace("/");

                });

            } else {
                console.log("Invalid email")
            }
            // document.location.reload()

        }
    }
    render() {
        return (
            <>
                <h1 className="title">Log in</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange= {(event) => this.setState({email: event.target.value})}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange= {(event) => this.setState({password: event.target.value})}/>
                    </Form.Group>

                    <Button onClick={
                            () => this.login()
                        }
                        variant="primary">
                        Enter
                    </Button>
                </Form>
            </>
        );
    }
};

export default Login;
