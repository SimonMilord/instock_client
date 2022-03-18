import './AddNewWarehouse.scss';
import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

class AddNewWarehouse extends Component() {

    state = {
        formSubmitted: false,
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const warehouseName = event.target.warehouseName.value;
        const warehouseAddress = event.target.streetAddress.value;
        const warehouseCity = event.target.warehouseCity.value;
        const warehouseCountry = event.target.warehouseCountry.value;
        const contactName = event.target.contactName.value;
        const contactPosition = event.target.contactPosition.value;
        const contactPhoneNumber = event.target.contactPhoneNumber.value;
        const contactEmail = event.target.contactEmail.value;

        //post data to API
        axios
            .post(`${process.env.REACT_APP_API_UPL}/warehouses`, {
                name: warehouseName,
                address: warehouseAddress,
                city: warehouseCity,
                country: warehouseCountry,
                //not sure if I should create an contact array
                    name: contactName,
                    position: contactPosition,
                    phone: contactPhoneNumber,
                    email: contactEmail
            })
            .then((res) => {
                console.log(res);
                this.setState({
                formSubmitted: true,
            });
            alert('Your form was succesfully submited!');
            })
            .catch((err) => {
                console.log(err);
            });
    }



  render() {

    if (this.state.formSubmitted) {
        return <Redirect to='/' />
    }

    return (

        <div className='newWarehouse'>
            <form onSubmit={this.handleFormSubmit} className='newWarehouse__container'>
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
                                <input className="newWarehouse__form-input" type="text" name="warehouseCity"
                                    placeholder="City" />
                            </label>
                            <label className='newWarehouse__form-header'>Country
                                <input className="newWarehouse__form-input" type="text" name="warehouseCountry"
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
                                <input className="newWarehouse__form-input" type="text" name="contactPosition"
                                    placeholder="Position" />
                            </label>
                            <label className='newWarehouse__form-header'>Phone Number
                                <input className="newWarehouse__form-input" type="text" name="contactPhoneNumber"
                                    placeholder="City" />
                            </label>
                            <label className='newWarehouse__form-header'>Email
                                <input className="newWarehouse__form-input" type="text" name="contactEmail"
                                    placeholder="Email" />
                            </label>
                        </form>
                    </div>
                </section>
                <div className='newWarehouse__form-btn'>
                    <Link className='newWarehouse__form-btn-link-cancel' to='/'>
                        <button className='newWarehouse__form-btn-cancel' type=''>Cancel</button>
                    </Link>
                    <Link className='newWarehouse__form-btn-link-add' to='/'>
                        <button className='newWarehouse__form-btn-add' type='submit'>+ Add Warehouse</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
}

export default AddNewWarehouse;