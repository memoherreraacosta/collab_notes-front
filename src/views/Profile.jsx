import React from "react";
import { useAuth0 } from "../auth/react-auth0-spa";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Profile = () => {
    const { user } = useAuth0();
    return (
        <Form>
            <FormGroup>
                <img
                    src={user.picture}
                    alt="Profile"
                    className="nav-user-profile rounded-circle"
                    width="20%"
                />
                <h1>{user.name}</h1>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label>Email: </Label>
                <p>{user.email}</p>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label>School: </Label>
                <p>Tecnológico de Monterrey Campus Guadalajara</p>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label>About me: </Label>
                <p>I'm a senior Computer Science student.</p>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label>My courses: </Label>
                <ul>
                    <li>Web development</li>
                    <li>Mobile development</li>
                    <li>Cuantitative methods</li>
                    <li>Data Science</li>
                    <li>Intelligent Systems</li>
                </ul>
            </FormGroup>  
    </Form>
    );
};

export default Profile;
