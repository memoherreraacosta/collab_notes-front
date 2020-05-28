import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const NotePreview = (props) => {


  return (
    <div>
      <Jumbotron>
        <h1 className="display-6">{props.subject}</h1>
        <p className="lead onelinenote" >Note 1 of {props.subject}</p>
        <hr className="my-2" />
        <p className="lead onelinenote" >Note 2 of {props.subject}</p>
        <p className="lead">
          <Button color="primary">See more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default NotePreview;