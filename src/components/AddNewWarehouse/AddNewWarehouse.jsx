import './AddNewWarehouse.scss';
import { Component } from "react";

import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

function AddNewWarehouse() {

    return (

        <div className='newWarehouse'>
            <div className='newWarehouse__container'>
                <div className='newWarehouse__header'>
                    <img className='newWarehouse__header-img' src={arrowBack} alt="arrow back"></img>
                    <h1 className='newWarehouse__header-title'>Add New Warehouse</h1>
                </div>

                <section className="newWarehouse__form">
                    <div className="newWarehouse__form-container">
                        <form className="newWarehouse__form-details">
                            <h2 className='newWarehouse__form-title'>Warehouse Details</h2>
                            <label className='newWarehouse__form-header'>Warehouse Name
                                <input className="newWarehouse__form-input" type="text" name="warehouseName"
                                    placeholder="Warehouse Name" />
                            </label>
                            <label className='newWarehouse__form-header'>Street Address
                                <input className="newWarehouse__form-input" type="text" name="warehouseAddress"
                                    placeholder="Street Address" />
                            </label>
                            <label className='newWarehouse__form-header'>City
                                <input className="newWarehouse__form-input" type="text" name="city"
                                    placeholder="City" />
                            </label>
                            <label className='newWarehouse__form-header'>Country
                                <input className="newWarehouse__form-input" type="text" name="country"
                                    placeholder="Country" />
                            </label>
                        </form>
                    </div>
                    <div className="newWarehouse__form-divider" ></div>
                    <div className="newWarehouse__form-container">
                        <form className="newWarehouse__form-details">
                            <h2 className='newWarehouse__form-title'>Contact Details</h2>
                            <label className='newWarehouse__form-header'>Contact Name
                                <input className="newWarehouse__form-input" type="text" name="contactName"
                                    placeholder="Contact Name" />
                            </label>
                            <label className='newWarehouse__form-header'>Position
                                <input className="newWarehouse__form-input" type="text" name="position"
                                    placeholder="Position" />
                            </label>
                            <label className='newWarehouse__form-header'>Phone Number
                                <input className="newWarehouse__form-input" type="text" name="city"
                                    placeholder="City" />
                            </label>
                            <label className='newWarehouse__form-header'>Email
                                <input className="newWarehouse__form-input" type="text" name="email"
                                    placeholder="Email" />
                            </label>
                        </form>
                    </div>
                </section>
                <div className='newWarehouse__form-btn'>
                    <button className='newWarehouse__form-btn-cancel' type='button'>Cancel</button>
                    <button className='newWarehouse__form-btn-add' type='submit'>+ Add Warehouse</button>
                </div>
            </div>
        </div>
    );
}

export default AddNewWarehouse;