import React from "react";
import { Button, Form} from 'react-bootstrap';
import {connection_db} from './../utils/connection_db'


class Classes extends React.Component {
    constructor(props){
        super(props);
        this.state={
          name: '',
          description: ''
        }

        this.createClass = () =>{
            const nombre = this.state.name;
            const descripcion = this.state.description;
            const query = `INSERT INTO \`collabnotes\`.\`CLASE\` (nombre, descripcion) VALUES ('${nombre}', '${descripcion}');`
            console.log(connection_db(query, false))

        }
    }


    render(){
        return (
            <>
                <h1 className="title" >Create class</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Class name</Form.Label>
                        <Form.Control 
                        onChange = {(event) => this.setState({name: event.target.value})}
                        type="text" placeholder="E.g. Mathematics II" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        onChange = {(event) => this.setState({description: event.target.value})}
                        type="text" placeholder="Description of the class..." />
                    </Form.Group>
        
                <Button onClick={() => this.createClass()} 
                    variant="primary">
                        Create account
                    </Button>
                </Form>
            </>     
        );
    }
};

export default Classes;