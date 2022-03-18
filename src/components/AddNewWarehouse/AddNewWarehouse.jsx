import { Component } from "react";

import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

function AddNewWarehouse() {

    return (

        <div className='newWarehouse'>
            <div className='newWarehouse__header'>
                <img className='newWarehouse__header-img' src={arrowBack} alt="arrow back"></img>
                <h1 className='newWarehouse__header-title'>Add New Warehouse</h1>
            </div>

            <section className="newWarehouse__forms">
                <form className="newWarehouse__form-details">
                    <h2 className='newWarehouse__form-title'>Warehouse Details</h2>
                    <label className='newWarehouse__form-title'>Warehouse Name
                        <input className="newWarehouse__form-input" type="text" name="warehouseName"
                            placeholder="Warehouse Name" />
                    </label>
                    <label className='newWarehouse__form-title'>Street Address
                        <input className="newWarehouse__form-input" type="text" name="warehouseAddress"
                            placeholder="Street Address" />
                    </label>
                    <label className='newWarehouse__form-title'>City
                        <input className="newWarehouse__form-input" type="text" name="city"
                            placeholder="City" />
                    </label>
                    <label className='newWarehouse__form-title'>Country
                        <input className="newWarehouse__form-input" type="text" name="country"
                            placeholder="Country" />
                    </label>
                </form>
                <form className="newWarehouse__form-details">
                    <h2 className='newWarehouse__form-title'>Contact Details</h2>
                    <label className='newWarehouse__form-title'>Contact Name
                        <input className="newWarehouse__form-input" type="text" name="contactName"
                            placeholder="Contact Name" />
                    </label>
                    <label className='newWarehouse__form-title'>Position
                        <input className="newWarehouse__form-input" type="text" name="position"
                            placeholder="Position"/>
                    </label>
                    <label className='newWarehouse__form-title'>Phone Number
                        <input className="newWarehouse__form-input" type="text" name="city"
                            placeholder="City" />
                    </label>
                    <label className='newWarehouse__form-title'>Email
                        <input className="newWarehouse__form-input" type="text" name="email"
                            placeholder="Email"/>
                    </label>
                </form>
            </section>
            <div className='upload__btn'>
                <button className="upload__btn-cancel" type='button'>cancel</button>
                <button className="upload__btn-publish" type='submit'>+ Add Warehouse</button>
            </div>
        </div>
    );
}

export default AddNewWarehouse;