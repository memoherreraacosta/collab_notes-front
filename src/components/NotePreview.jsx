import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {connection_db} from './../utils/connection_db'
import { getId } from "./../utils/getData";

const NotePreview = (props) => {
  const user_id = getId()

  function joinClass(){
    const query = `INSERT INTO \`collabnotes\`.\`ESTUDIANTE-CLASE\` (idEstudiante, clave) VALUES (${user_id}, ${props.clave})`;
    alert(query)
    const x = connection_db(query, false);
    const promise = Promise.resolve(x);
    promise.then((value) => {
        console.log(value);
    });
  }

  return (
    <div>
      <Jumbotron>
      <Button color="primary" onClick={joinClass} className="float-right">Join class</Button>
        <h1 className="display-6">{props.subject}</h1>
        <hr className="my-2" />
        <p className="lead onelinenote" >{props.description}</p>
        <p className="lead">
          <Button color="primary" href={'/upload?CLASS='+props.clave+'&CLASSNAME='+props.subject}>See more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};


export default NotePreview;