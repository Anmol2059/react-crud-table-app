import React, { useContext } from 'react';
import TableForm from './TableForm';
import { useParams } from 'react-router-dom';
import TableContext from '../context/TableContext';

const EditTable = ({ history }) => {
  const { tables, setTables } = useContext(TableContext);

  const { id } = useParams();
  
  const tableToEdit = tables.find((table) => table.tablename === id);

  console.log(tableToEdit);

  const handleOnSubmit = (table) => {
    const filteredBooks = tables.filter((table) => table.tablename !== id);
    setTables([table, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <TableForm table={tableToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditTable;
