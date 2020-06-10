import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {connection_db} from './../utils/connection_db'
import { getId } from "./../utils/getData";

const NotePreview = (props) => {
  const user_id = getId()

  return (
    <div>
      <Jumbotron>
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