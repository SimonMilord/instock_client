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
                    <Link to="/inventory:id">
                        <img className="itemDetails__subHead-arrow" src={arrowBack} alt="back arrow" />
                    </Link>
                    <h1 className="itemDetails__subHead-title">Television</h1>
                    {/* <h1 className="itemDetails__subHead-title">{props.itemName</h1> */}
                </div>
                <div>
                <Link>
                    <button className="itemDetails__subHead-btn--mobile"><img className="itemDetails__subHead-btn--mobile-img" src={editPen} alt="editing icon" /></button>
                </Link>
                <Link>
                    <button className="itemDetails__subHead-btn--tabDesk"><img className="itemDetails__subHead-btn--tabDesk-img" src={editPen} alt="editing icon" />Edit</button>
                </Link>
                </div>
            </div>

            <div className="itemDetails__content">
                <div className="itemDetails__contentBox itemDetails__contentBox--left">
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__label">item description:</h4>
                        <p className="itemDetails__data">blblblblblblblblblblblblbl</p>
                        {/* <p>{props.description}</p> */}
                    </div>
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__label">category:</h4>
                        <p className="itemDetails__data">bla vlala</p>
                        {/* <p className="itemDetails__data">{props.category}</p> */}
                    </div>
                </div>

                <div className="itemDetails__contentBox itemDetails__contentBox--right">
                    <div className="itemDetails__contentSubBox">
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__label">status:</h4>
                            <h4 className='itemDetails__status itemDetails__status--out'>In Stock</h4>
                            {/* <h4 className={props.status === 'In Stock' ? 'itemDetails__status': 'itemDetail__status itemDetail__status--out'}>{props.status}</h4> */}
                        </div>
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__label">warehouse:</h4>
                            <p className="itemDetails__data">Manplatan</p>
                            {/* <p className="itemDetails__data">{props.warehouseName}</p> */}
                        </div>
                    </div>
                    <div className="itemDetails__contentSubBox">
                        <div className="itemDetails__contentBox-data">
                            <h4 className="itemDetails__label">quantity:</h4>
                            <p className="itemDetails__data">dubi</p>
                            {/* <p className="itemDetails__data">{props.quantity}</p> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default InventoryItemDetails;