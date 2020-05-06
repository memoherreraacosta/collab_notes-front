import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const NotePreview = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-6">{props.subject}</h1>
        <p className="lead">This is the abstract of the note</p>
        <hr className="my-2" />
        <p>This is the content of the note.</p>
        <p className="lead">
          <Button color="primary">See full note</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default NotePreview;