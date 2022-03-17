import "./EditInventory.scss";
import { Component } from "react";
import InventoryList from "../InventoryList/InventoryList";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg"
import axios from "axios";

class EditInventory extends Component {

state = {
    warehouse:[],
    inventory:[],
}

getInventoryData(){
    axios
    .get(`${process.env.REACT_APP_API_URL}/inventory`)
    .then((response) =>{
        this.setState({
            inventory: response.data,
        });
        
    })
}

getWarehouseData(){
    axios
    .get(`${process.env.REACT_APP_API_URL}/warehouse`)
    .then((response) =>{
        this.setState({
            warehouse: response.data,
        });
})

componentDidMount(){
    this.getInventoryData();
    this.getWarehouseData();
}



    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateInventory(id, updateInventory)

// function EditInventory(props) {
render(){    
return (
        <div>
                        <div className="header">
                    <img className="header__icon" src={arrowBack} alt="arrow back"></img>
                    <h1 className="header__heading"> Edit Inventory</h1>
                </div>
        <form onSubmit={handleFormSubmit}>
        <div>
            <label>Item Name</label>
                <input
                type="text"
                placeholder="itemName *"
                name="Item Name"
                value={itemName}
                onChange={(e)=> setName(e.target.value)}
                required
                ></input> 
                </div>
        <div>
            <label>Description</label>
            <textarea
                type="textarea"
                placeholder="description *"
                name="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
                ></textarea>
        </div>
        <div>
        <label className="itemDetails__labels">Category</label>
                                <Select className="itemDetails__select" name="category" id="" placeholder="Please select">
                                    <option className="itemDetails__select--option" value="1">Electronics</option>
                                    <option className="itemDetails__select--option" value="2">Gear</option>
                                    <option className="itemDetails__select--option" value="3">Apparel</option>
                                    <option className="itemDetails__select--option" value="4">Accessories</option>
                                    <option className="itemDetails__select--option" value="5">Health</option>
                                </Select>
       {/* <label>Category</label>
       <textarea
                type="select"
                // placeholder="itemName *"
                name="Category"
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                required
                ></textarea> */}
        </div>
        <div>
       <label>Status</label>
       <input
                type="select"
                // placeholder="itemName *"
                name="Status"
                value={status}
                onChange={(e)=> setStatus(e.target.value)}
                required
                ></input>
        </div>
        <div>
        <Select className="itemDetails__select" name="Please select" id="">
                                <option className="itemDetails__select--option" value="1">Manhattan</option>
                                <option className="itemDetails__select--option" value="2">Washington</option>
                                <option className="itemDetails__select--option" value="3">Jersey</option>
                                <option className="itemDetails__select--option" value="4">San Fran</option>
                                <option className="itemDetails__select--option" value="5">Santa Monica</option>
                                <option className="itemDetails__select--option" value="5">Seattle</option>
                                <option className="itemDetails__select--option" value="5">Miami</option>
                            </Select>
       {/* <label>Warehouse</label>
       <input
                type="select"
                // placeholder="itemName *"
                name="Warehouse"
                value={warehouse}
                onChange={(e)=> setWarehouse(e.target.value)}
                required
                ></input> */}
        </div>
        <button type="button" onClick={(event) => (window.location.href = "/inventory")}>
           Cancel
        </button>
        <button type="submit" >
           Save
        </button>
    </form>
    </div>

    )
}} 
 }



export default EditInventory;  
