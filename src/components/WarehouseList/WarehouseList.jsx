import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./WarehouseList.scss";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import trashCan from "../../assets/Icons/delete_outline-24px.svg";
import editPen from "../../assets/Icons/edit-24px.svg";

class WarehouseList extends Component {
  render() {
    return (
      <div className='whList'>
        <div className='whLi'>
          <div className='whLi__box'>
            <div className='whLi__subbox whLi__subbox--left'>
              <div className='whLi__item whLi__item--link'>
                <h4 className='whLi__label'>Warehouse</h4>
                <Link className='whLi__link' path="/">Manhattan</Link>
                <img className='whLi__link-icon' src={chevron} alt="chevron"></img>
              </div>
              <div className='whLi__item'>
                <h4 className='whLi__label'>Address</h4>
                <p className='whLi__info'>503 Broadway, New York, USA</p>
              </div>
            </div>
            <div className='whLi__subbox whLi__subbox--right'>
              <div className='whLi__item'>
                <h4 className='whLi__label'>Contact Name</h4>
                <p className='whLi__info'>Parmin Aujla</p>
              </div>
              <div className='whLi__item'>
                <h4 className='whLi__label'>Contact Information</h4>
                <p className='whLi__info'>+1 (629) 555-0129 paujla@instock.com</p>
              </div>
            </div>
          </div>
          <div className='whLi__actions'>
            <img className="whLi__deleteBtn" src={trashCan} alt="trash can icon"></img>
            <img className="whLi__editBtn" src={editPen} alt="edit pen icon"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default WarehouseList;