import React, { useContext } from 'react';
import _ from 'lodash';
import Table from './Table';
import TableContext from '../context/TableContext';

const TablesList = () => {
  const { tables, setTables } = useContext(TableContext);

  const handleRemoveTable = (name) => {
    setTables(tables.filter((table) => table.tablename !== name));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(tables) ? (
          tables.map((table) => (
            <Table key={table.tablename} {...table} handleRemoveTable={handleRemoveTable} />
          ))
        ) : (
          <p className="message">No Tablesavailable. Please add some Table.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default TablesList;