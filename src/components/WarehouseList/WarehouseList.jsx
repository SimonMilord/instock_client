import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./WarehouseList.scss";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import trashCan from "../../assets/Icons/delete_outline-24px.svg";
import editPen from "../../assets/Icons/edit-24px.svg";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

class WarehouseList extends Component {
  render() {
    return (
      <>
        {/* header of the page */}
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
        {/* row of labels for the table on desktop and tablet */}
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
        {/* list of warehouses */}
        <div className='whList'>
          <div className='whLi'>
            <div className='whLi__box'>
              <div className='whLi__subbox whLi__subbox--left'>
                <div className='whLi__item whLi__item--link'>
                  <h4 className='whLi__label'>Warehouse</h4>
                  <div className='whLi__link-box'>
                    <Link to="/warehouse/:id">
                      <p2 className='whLi__link'>Manhattan</p2>
                    </Link>
                    <img className='whLi__link-icon' src={chevron} alt="chevron"></img>
                  </div>
                </div>
                <div className='whLi__item'>
                  <h4 className='whLi__label'>Address</h4>
                  <p2 className='whLi__info'>503 Broadway, New York, USA</p2>
                </div>
              </div>
              <div className='whLi__subbox whLi__subbox--right'>
                <div className='whLi__item'>
                  <h4 className='whLi__label'>Contact Name</h4>
                  <p2 className='whLi__info'>Parmin Aujla</p2>
                </div>
                <div className='whLi__item'>
                  <h4 className='whLi__label'>Contact Information</h4>
                  <p2 className='whLi__info'>+1 (629) 555-0129 <br/>paujla@instock.com</p2>
                </div>
              </div>
            </div>
            <div className='whLi__actions'>
              <img className="whLi__deleteBtn iconBtn" src={trashCan} alt="trash can icon"></img>
              <img className="whLi__editBtn iconBtn" src={editPen} alt="edit pen icon"></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WarehouseList;