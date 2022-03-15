import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            {/* Routing */}
            <Route
              path="/"
              exact
              render={(routerProps) => <WarehousesPage {...routerProps} /> }
            />
            <Route
              path="/warehouses"
              exact
              render={(routerProps) => <WarehousesPage {...routerProps} /> }
            />
            <Route
              path="/warehouses/:id"
              render={(routerProps) => <WarehousesPage {...routerProps} /> }
            />
            <Route
              path="/inventory"
              exact
              render={(routerProps) => <InventoryPage {...routerProps} /> }
            />
            <Route
              path="/inventory/:id"
              render={(routerProps) => <InventoryPage {...routerProps} /> }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;