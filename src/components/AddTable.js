import React, { useContext } from 'react';
import TableForm from './TableForm';
import TableContext from '../context/TableContext';

const AddTable = ({ history }) => {
  const { tables, setTables } = useContext(TableContext);

  const handleOnSubmit = (table) => {
    var doPush = true;

    tables.forEach(x => {
        if(x.tablename === table.tablename){
          alert("Cannot insert dublicate");
          doPush = false;
        }
    });

    if(doPush)
      setTables([table, ...tables]);

    history.push('/');
  };

  return (
    <React.Fragment>
      <TableForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddTable;
