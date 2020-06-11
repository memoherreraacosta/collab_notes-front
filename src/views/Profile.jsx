import React from "react";
import {Form, FormGroup, Label} from 'reactstrap';

import { getName, getEmail } from "./../utils/getData";

const Profile = () => {
    return (
        <Form>
            <FormGroup>
                <h1><p>{getName()}</p></h1>
            </FormGroup>
            <br/>
            <FormGroup>
                <Label>Email: </Label>
                <p>{getEmail()}</p>
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
