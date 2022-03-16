import { Component } from "react";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "./AddNewInventoryItem.scss";

class AddNewInventoryItem extends Component{
    
    render(){
        return(
            <div>
                <div>
                    <img className="header__bar--icon" src={arrowBack} alt="arrow back"></img>
                    <h2 className="header__bar--heading">Add New Inventory Item</h2>
                </div>
                <form>
                    <div>
                        <div>
                            <h3>Item Details</h3>
                            <label>Item Name</label>
                            <input
                                className=""
                                type="text"
                                name="ItemName"
                                placeholder="Item Name"
                            />
                            <label>description</label>
                            <input
                                className=""
                                type="textarea"
                                name="description"
                                placeholder="Please enter a brief item description"
                            />
                              <label>Category</label>
                                <Select className="" name="category" id="" placeholder="Please select">
                                    <option value="1">Electronics</option>
                                    <option value="2">Gear</option>
                                    <option value="3">Apparel</option>
                                    <option value="4">Accessories</option>
                                    <option value="5">Health</option>
                                </Select>
                        </div>
                        <div>
                            <h3>Item Availability</h3>
                            <p>Status</p>
                            <div>
                                <input type="radio" id="" name="stock_status" value="HTML"/>
                                <label for="html">In Stock</label>
                                <input type="radio" id="" name="stock_status" value="CSS"/>
                                <label for="css">Out Of Stock</label>
                            </div>

                            <label>Quantity</label>
                                <input
                                    className=""
                                    type="number"
                                    name="quantity"
                                    placeholder="0"
                                />
                            <label>Warehouse</label>
                            <Select className="" name="Please select" id="">
                                <option value="1">Manhattan</option>
                                <option value="2">Washington</option>
                                <option value="3">Jersey</option>
                                <option value="4">San Fran</option>
                                <option value="5">Santa Monica</option>
                                <option value="5">Seattle</option>
                                <option value="5">Miami</option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <button>
                            Cancel
                        </button>
                        <button>
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}