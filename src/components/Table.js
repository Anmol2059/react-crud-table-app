import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Table = ({tablename, layout, capacity, status, imageUrl, handleRemoveTable}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        {imageUrl && 
          <img src={imageUrl} class="card-img-top"></img>}

        <Card.Title className="book-title">{tablename}</Card.Title>
        <div className="book-details">
          <div>Layout: {layout}</div>
          <div>Capacity: {capacity} </div>
          <div>Status: {status} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${tablename}`)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => handleRemoveTable(tablename)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Table;