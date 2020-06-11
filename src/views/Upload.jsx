import React from "react";
import {Form} from 'react-bootstrap';
import S3 from 'react-aws-s3';
import {connection_db} from './../utils/connection_db'
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { getId } from "./../utils/getData";

const config = {
    bucketName: 'a01632704',
    region: 'us-east-2',
    accessKeyId: 'AKIAJMWJZKKKDCMN4ADQ',
    secretAccessKey: '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'
}

const ReactS3Client = new S3(config);

class Upload extends React.Component {
    constructor(){
        super();
        this.state={
            class_id:'',
            class_name: '',
            filename:'',
            archivos:[],
            partofclass: false
          }
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const classId = parseInt(urlParams.get('CLASS'))
        const className = urlParams.get('CLASSNAME')
        const user_id = getId();
        this.setState({class_id: classId})
        console.log("class id es ", classId);


        const query = `SELECT * FROM \`collabnotes\`.\`ARCHIVO\` WHERE idClase=${classId};`
        const x = connection_db(query, true);
        const prom = Promise.resolve(x);
        prom.then((value) => {
            this.setState({archivos: value, class_name: className})
        });


        const queryIsPart = `SELECT * FROM \`collabnotes\`.\`ESTUDIANTE-CLASE\` WHERE clave=${classId} AND idEstudiante=${user_id};`
        const x1 = connection_db(queryIsPart, true);
        const promise = Promise.resolve(x1);
        promise.then((value) => {
            console.log("ANS: ", value);
            this.setState({partofclass: value.length === 1});
        });

        this.upload2 = (e) =>{
            console.log(e.target.files[0]);
            console.log(this.state)
            ReactS3Client.uploadFile(e.target.files[0], e.target.files[0].name)
            .then((data)=>{
                console.log(data.location);
                const url = data.location;
                const filename = this.state.filename;
                const query = `INSERT INTO \`collabnotes\`.\`ARCHIVO\` (url, titulo, idEstudiante, idClase) VALUES ('${url}', '${filename}', ${user_id}, ${classId});`
                const x = connection_db(query, false);
                const promise = Promise.resolve(x); 
                promise.then((value) => {
                    console.log(value);
            });
            })
            .catch((err)=>{
                alert(err)
            })
        }

        this.leaveClass = () =>{
            const query = `DELETE FROM \`collabnotes\`.\`ESTUDIANTE-CLASE\` WHERE idEstudiante=${user_id} AND clave=${classId};`;
            const x = connection_db(query, false);
            const promise = Promise.resolve(x);
            promise.then((value) => {
                console.log(value);
            });
            document.location.reload();
        }
        this.joinClass = () =>{
            const query = `INSERT INTO \`collabnotes\`.\`ESTUDIANTE-CLASE\` (idEstudiante, clave) VALUES (${user_id}, ${classId})`;
            const x = connection_db(query, false);
            const promise = Promise.resolve(x);
            promise.then((value) => {
                console.log(value);
            });
            document.location.reload();
        }
    }

    render(){
        return(
            <div>
                { this.state.partofclass  ? (
                    <Button color="primary" onClick={() => this.leaveClass()}  className="float-right">Leave class</Button>
                ):(
                    <Button color="success" onClick={() => this.joinClass()}  className="float-right">Join class</Button>
                )}
                <h1>Notes from {this.state.class_name}</h1>
                <br/>
                <ListGroup>
                {this.state.archivos.map(function(x){
                        return (
                            <ListGroupItem tag="a" href={x.url}>{x.titulo}</ListGroupItem>)
                    })

                }
                </ListGroup>
                <br/>
                <br/>
                <h2>
                    Upload new note for  {this.state.class_name}
                </h2>

                <Form>
                    <Form.Group controlId="titulo">
                        <Form.Label>File title</Form.Label>
                        <Form.Control type="text" placeholder="Enter file title" 
                             onChange = {(event) => this.setState({filename: event.target.value})}
                        />
                    </Form.Group>
                    <input 
                        type="file"
                        onChange={(e) => this.upload2(e)} 
                    />
                </Form>
            </div>
        )
    }
}

export default Upload;
