import React, { Component } from 'react';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import "./WarehousesPage.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";

class WarehousesPage extends Component {
  render() {
    return (
      <div className='warehousePage'>
        <div className='warehousePage-subhead'>
          <h1 className='warehousePage-title'>Warehouses</h1>
          <div className='warehousePage-subhead__right'>
            <div className='search'>
              <input className="search__input" type="text" name="" placeholder='Search...' />
              <img className='search__icon' src={searchIcon} alt="search icon"></img>
            </div>
            <button className='newWarehouse-btn'>+ Add New Warehouse</button>
          </div>
        </div>
        <WarehouseList />
      </div>
    );
  }
}

export default WarehousesPage;