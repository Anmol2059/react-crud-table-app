import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TableForm = (props) => {
  const [table, setTable] = useState(() => {
    return {
      tablename: props.table ? props.table.tablename : '',
      layout: props.table ? props.table.layout : "",
      imageUrl: props.table ? props.table.imgUrl : "",
      capacity: props.table ? props.table.capacity : 0,
      status: props.table ? props.table.status : "",
    }
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { tablename, layout, imageUrl, capacity, status } = table;

  var copyProp = {...table};

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [tablename, layout, imageUrl, capacity];
    let errorMsg = '';
    
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const table = {
        tablename, layout, imageUrl, capacity, status
      };
      props.handleOnSubmit(table);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;


    switch (name) {
      case 'imageUrl':
        var file = document.getElementById('imageUrl').files[0];
        console.log(file);
        var fileReader = new FileReader();

        fileReader.addEventListener("load", function () {
          const x = fileReader.result;
          console.log(x);

          setTable((prevState) => ({...prevState, [name] : x}));
        }, false);
        
        fileReader.readAsDataURL(file);
        break;
      default:
        setTable((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit} className="container w-75 d-flex align-items-start 
          justify-content-center gap-3 flex-column">

        <Form.Group controlId="layout" className="d-flex gap-5 w-100">
          <Form.Label>Layout</Form.Label>

          <select name="layout" className="form-select" value={layout} onChange={handleInputChange}>
            <option value="" disabled>Select a table</option>
            <option value="Vertical">Vertical</option>
            <option value="Horizontal">Horizontal</option>
          </select>
        </Form.Group>

        <Form.Group controlId="tablename">
          <Form.Label>Table Name</Form.Label>

          <Form.Control
            type="text"
            name="tablename"
            value={tablename}
            placeholder="Enter name of table "
            onChange={handleInputChange}
          />
        </Form.Group>
       
        <Form.Group controlId="capacity">
          <Form.Label>Capacity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="capacity"
            value={capacity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <input type="checkbox" name="status" checked={status} onChange={handleInputChange} 
            className="form-check" />
        </Form.Group>
        
        <Form.Group controlId="imageUrl">
          <Form.Label>Image</Form.Label>
          <input type="file" name="imageUrl" id="imageUrl" checked={imageUrl} 
            onChange={handleInputChange}  />
        </Form.Group>

        <div className='d-flex gap-4 ms-4 align-items-center justify-content-start'>
          <Button variant="dark" type="submit" className="submit-btn">
            Submit
          </Button>
          <Button variant="danger" type="reset" className="submit-btn">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TableForm;
