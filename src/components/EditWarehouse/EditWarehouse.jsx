import { Component } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg"

class EditWarehouse extends Component{
    render() {
        return(
            <div>
                <div className="header__bar">
                    <img className="header__bar--icon" src={arrowBack} alt="arrow back"></img>
                    <h2 className="header__bar--heading"> Edit Warehouse</h2>
                </div>
               <form>
               <div>
                    <div>
                        <h3>Warehouse Details</h3>
                        <label>Warehouse Name</label>
                        <input
                        type="text"
                        name="WarehouseName"
                        placeholder=""
                        />
                        <label>Street Address</label>
                        <input
                        type="text"
                        name="StreetAddress"
                        placeholder=""
                        />
                        <label>City</label>
                        <input
                        type="text"
                        name="city"
                        placeholder="City"
                        />
                        <label>Country</label>
                        <input
                        type="text"
                        name="country"
                        placeholder=""
                        />
                    </div>
                    <div>
                        <h3>Contact Details</h3>
                        <label>Contact Name</label>
                        <input
                        type="text"
                        name="ContactName"
                        placeholder=""
                        />
                        <label>Position</label>
                        <input
                        type="text"
                        name="Position"
                        placeholder=""
                        />
                        <label>Phone Number</label>
                        <input
                        type="text"
                        name="PhoneNumber"
                        placeholder=""
                        />
                        <label>Email</label>
                        <input
                        type="text"
                        name="email"
                        placeholder=""
                        />
                    </div>
                </div>
                <div>
                    <button>
                        Cancel
                    </button>
                    <button>
                        Save
                    </button>
                </div>
               </form>
            </div>
        )
    }
}

export default EditWarehouse;