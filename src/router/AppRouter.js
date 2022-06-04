import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AddTable from '../components/AddTable';
import TablesList from '../components/TablesList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditTable from '../components/EditTable';
import TableContext from '../context/TableContext';

const AppRouter = () => {
  const [tables, setTables] = useLocalStorage('tables', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <TableContext.Provider value={{ tables, setTables }}>
            <Switch>
              <Route component={TablesList} path="/" exact={true} />
              <Route component={AddTable} path="/add" />
              <Route component={EditTable} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </TableContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
