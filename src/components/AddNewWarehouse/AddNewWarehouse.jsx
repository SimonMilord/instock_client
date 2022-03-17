import { Component } from "react";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

function AddNewWarehouse() {

    return (

        <div className='newWarehouse'>
            <div className='newWarehouse__header'>
                <img className='newWarehouse__header-img' src={arrowBack} alt="arrow back"></img>
                <h1 className='newWarehouse__header-title'>Add New Warehouse</h1>
            </div>

            <div className="newWarehose__forms">
                <form className="newWarehouse__form-details">
                    <h2 className='newWarehouse__form-title'>Warehouse Details</h2>
                    <label className='newWarehouse__form-title'>Warehouse Name
                        <input className="newWarehouse__form-input" type="text" name="warehouseName"
                            placeholder="Warehouse Name"/>
                    </label>
                    <label className='newWarehouse__form-title'>Street Address
                        <input className="newWarehouse__form-input" type="text" name="warehouseAddress"
                            placeholder="Street Address"/>
                    </label>
                    <label className='newWarehouse__form-title'>City
                        <input className="newWarehouse__form-input" type="text" name="city"
                            placeholder="City"/>
                    </label>
                    <label className='newWarehouse__form-title'>Country
                        <input className="newWarehouse__form-input" type="text" name="country"
                            placeholder="Country"/>
                    </label>
                </form>
                <div>
                    add two buttons
                </div>




            </div>



        </div>


    );
}

export default AddNewWarehouse;