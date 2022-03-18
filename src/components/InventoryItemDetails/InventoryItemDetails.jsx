import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './InventoryItemDetails.scss';
import editPen from "../../assets/Icons/edit-24px.svg";
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';



function InventoryItemDetails(props) {

    return (

        <div className="itemDetails">
            <div className="itemDetails__subHead">
                <div className="itemDetails__subHead-left">
                    <img className="itemDetails__subHead-arrow" src={arrowBack} alt="back arrow" />
                    <h1 className="itemDetails__subHead-title">Television</h1>
                </div>
                <Link>
                    <button className="itemDetails__subHead-btn"><img className="itemDetails__subHead-btn-img" src={editPen} alt="editing icon" /></button>
                </Link>
            </div>

            <div className="itemDetails__content">
                <div className="itemDetails__contentBox itemDetails__contentBox--left">
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__lable">item description</h4>
                        <p>blblblblblblblblblblblblbl</p>
                        {/* <p>{props.description}</p> */}
                    </div>
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__lable">category</h4>
                        <p className="itemDetails__data">bla vlala</p>
                        {/* <p className="itemDetails__data">{props.category}</p> */}
                    </div>
                </div>

                <div className="itemDetails__contentBox itemDetails__contentBox--right">
                    <div className="itemDetails__contentSubBox">
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__lable">status</h4>
                            <h4 className='card__status card__status--out'>In Stock</h4>
                            {/* <h4 className={props.status === 'In Stock' ? 'card__status': 'card__status card__status--out'}>{props.status}</h4> */}
                        </div>
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__lable">warehouse</h4>
                            <p className="itemDetails__data">Manplatan</p>
                            {/* <p className="itemDetails__data">{props.warehouseName}</p> */}
                        </div>
                    </div>
                    <div className="itemDetails__contentSubBox">
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__lable">quantity</h4>
                            <p className="itemDetails__data">blbblabla fdubi dubi</p>
                            {/* <p className="itemDetails__data">{props.quantity}</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default InventoryItemDetails;