import React, { Component } from 'react';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import "./WarehousesPage.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

class WarehousesPage extends Component {
  render() {
    return (
      // header of the warehouse Page
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
        {/* Label row for the warehouse list table (ONLY FOR TABLET/DESKTOP) */}
        <div className='labelsRow'>
          <div className='labelsRow__item'>
            <h4 className='labelsRow__label'>Warehouse</h4>
            <img className='labelsRow__icon' src={sortIcon} alt="sorting icon"></img>
          </div>
          <div className='labelsRow__item'>
            <h4 className='labelsRow__label'>Address</h4>
            <img className='labelsRow__icon' src={sortIcon} alt="sorting icon"></img>
          </div>
          <div className='labelsRow__item'>
            <h4 className='labelsRow__label'>Contact Name</h4>
            <img className='labelsRow__icon' src={sortIcon} alt="sorting icon"></img>
          </div>
          <div className='labelsRow__item'>
            <h4 className='labelsRow__label'>Contact Information</h4>
            <img className='labelsRow__icon' src={sortIcon} alt="sorting icon"></img>
          </div>
          <div className='labelsRow__item labelsRow__item--action'>
            <h4 className='labelsRow__label'>Actions</h4>
          </div>
        </div>
        <WarehouseList />
      </div>
    );
  }
}

export default WarehousesPage;