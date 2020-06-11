import React from "react";
import { Button, Form} from 'react-bootstrap';
import {connection_db} from './../utils/connection_db'
import md5 from 'md5'


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state={
          name: '',
          email:'',
          password:'',
          repeat_password: ''
        }
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        this.signup = () =>{
            const name = this.state.name
            const email = this.state.email
            const password = this.state.password
            const repeat_password = this.state.repeat_password
            if( validateEmail(email) && password === repeat_password){
                const hashed_pw = md5(password)
               const query = `INSERT INTO \`collabnotes\`.\`ESTUDIANTE\` (nombre, password, email) VALUES ('${name}', '${hashed_pw}', '${email}');`
               console.log(connection_db(query, false))
               window.location.replace("/");
                
            }

        }
    }


    render(){
        return (
            <>
                <h1 className="title" >Sign Up</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                        onChange = {(event) => this.setState({name: event.target.value})}
                        type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            onChange = {(event) => this.setState({email: event.target.value})}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        onChange = {(event) => this.setState({password: event.target.value})}
                        type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        onChange = {(event) => this.setState({repeat_password: event.target.value})}
                        />
                    </Form.Group>
        
                <Button onClick={() => this.signup()} 
                    variant="primary" type="submit">
                        Create account
                    </Button>
                </Form>
            </>     
        );
    }
};

export default SignUp;