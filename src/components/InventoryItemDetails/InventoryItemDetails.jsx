import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './InventoryItemDetailsscss';
import editPen from "../../assets/Icons/edit-24px.svg";
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';



function InventoryItemDetails() {

    return (

        <div className="itemDetails">
            <div className="itemDetails__subHead">
                <img className="itemDetails__subHead-arrow" src={arrowBack} alt="back arrow" />
                <h1>Television</h1>
                <Link>
                    <button><img src={editPen} alt="editing icon" />Edit</button>
                </Link>
            </div>

            <div className="itemDetails__content">
                <div className="itemDetails__contentBox itemDetails__contentBox--left">
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__lable">item description</h4>
                        <p>bla bla bla</p>
                    </div>
                    <div className="itemDetails__contentBox-data">
                        <h4 className="itemDetails__lable">category</h4>
                        <p>electonics</p>
                    </div>
                </div>

                <div className="itemDetails__contentBox itemDetails__contentBox--right">
                    <div className="itemDetails__contentSubBox">
                        <div>
                            <h4 className="itemDetails__lable">status</h4>
                            <h4>bla bla bla</h4>
                        </div>
                        <div>
                            <h4 className="itemDetails__lable">warehouse</h4>
                            <p>Manhatan</p>
                        </div>
                    </div>
                    <div className="itemDetails__contentSubBox">
                        <div>
                            <h4 className="itemDetails__lable">quantity</h4>
                            <p>500</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default InventoryItemDetails;