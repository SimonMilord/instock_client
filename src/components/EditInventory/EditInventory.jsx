import "./EditInventory.scss";
import { Component } from "react";
import InventoryList from "../InventoryList/InventoryList";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg"
import axios from "axios";


// getInventoryData(){
//     axios
//     .get(`${process.env.REACT_APP_API_URL}/inventory`)
//     .then((response) =>{
//         this.setState({
//             inventory: response.data,
//         });
        
//     })
// }

// getWarehouseData(){
//     axios
//     .get(`${process.env.REACT_APP_API_URL}/warehouse`)
//     .then((response) =>{
//         this.setState({
//             warehouse: response.data,
//         });
// })
// };

// // componentDidMount(){
    
   
// // }

    // handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     updateInventory(id, updateInventory)
    // }
// // function EditInventory(props) {

// function EditInventory(props)

    class EditInventory extends Component {
        state ={
            inventory:{ "id": "83433026-ca32-4c6d-bd86-a39ee8b7303e",
            "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
            "warehouseName": "Manhattan",
            "itemName": "Gym Bag",
            "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
            "category": "Gear",
            "status": "Out of Stock",
            "quantity": 0},}
        

        // handleFormSubmit(event){
        //     const itemName = event.target.itemName.value;
        //     const description = event.target.description.value;
        //     const category = event.target.category.value;
        //     const status = event.target.status.value;
        //     const warehouse = event.target.warehouse.value;
        // }
            render(){
                return(
                    <div className="editInventory">
                             <div className="editInventoryHeader">
                    <img className="editInventoryHeader__icon" src={arrowBack} alt="arrow back"></img>
                    <h1 className="editInventoryHeader__heading">edit inventory item</h1>
                </div>
                <div className="editInventoryForm">
                <h2 className="editInventoryForm__heading">Item Details</h2>
                        <form className="editInventoryForm__form" action="">
                        {/* onSubmit={handleFormSubmit} */}
                            <div className="editInventoryForm__field">
                            <label className="editInventoryForm__label"><h3>Item Name</h3></label>
                            <input
                            className="editInventoryForm__input"
                type="text"
                placeholder="itemName"
                name="Item Name"
                value={this.state.inventory.itemName}
                // onChange={(event)=> itemName(event.target.value)}
                required
                ></input> 
                  </div>
                  <div className="editInventoryForm__field">
                       <label className="editInventoryForm__label"><h3>Description</h3></label>
                            <textarea className="editInventoryForm__textarea"
                type="text"
                placeholder="description"
                name="Description"
                value={this.state.inventory.description}
                // onChange={(e)=> setName(e.target.value)}
                required
                ></textarea> 
</div>
<div className="editInventoryForm__field">
<label className="editInventoryForm__label"><h3>Category</h3></label>
<select className="editInventoryForm__input" name="Category" id="" placeholder="Please select">
<option className="editInventoryForm__select--option" value="1">Electronics</option>
                                    <option className="editInventoryForm__select--option" value="2">Gear</option>
                                    <option className="editInventoryForm__select--option" value="3">Apparel</option>
                                    <option className="editInventoryForm__select--option" value="4">Accessories</option>
                                    <option className="editInventoryForm__select--option" value="5">Health</option>
    
</select>

</div>
<h2 className="editInventoryForm__heading">Item Availability</h2>
<div className="editInventoryForm__field">
    <h3>Status</h3>
                            <div className="editInventoryForm__status">
                                <input className="editInventoryForm__status--radio" type="radio" id="" name="stock_status" value="HTML"/>
                                <label className="editInventoryForm__labels">In Stock</label>
                                <input className="editInventoryForm__status--radio" type="radio" id="" name="stock_status" value="CSS"/>
                                <label className="editInventoryForm__labels">Out Of Stock</label>
                            </div>
</div>
<div className="editInventoryForm__field">
<label className="editInventoryForm__label"><h3>Warehouse</h3></label>
<select className="editInventoryForm__input">
<option className="editInventoryForm__select--option" value="1">Manhattan</option>
                                <option className="editInventoryForm__select--option" value="2">Washington</option>
                                <option className="editInventoryForm__select--option" value="3">Jersey</option>
                                <option className="editInventoryForm__select--option" value="4">San Fran</option>
                                <option className="editInventoryForm__select--option" value="5">Santa Monica</option>
                                <option className="editInventoryForm__select--option" value="5">Seattle</option>
                                <option className="editInventoryForm__select--option" value="5">Miami</option>
</select>
</div>

<button type="button" onClick={(event) => (window.location.href = "/inventory")}>
            Cancel
         </button>
         <button type="submit" >
            Save
       </button>
                          
        
        
                        </form>
                    </div></div>
                )
            }
        }
        


// render(){    
// return (
//         <div>
//                         <div className="header">
//                     <img className="header__icon" src={arrowBack} alt="arrow back"></img>
//                     <h1 className="header__heading"> Edit Inventory</h1>
//                 </div>
//         <form onSubmit={handleFormSubmit}>
//         <div>
//             <label>Item Name</label>
//                 <input
//                 type="text"
//                 placeholder="itemName *"
//                 name="Item Name"
//                 value={itemName}
//                 onChange={(e)=> setName(e.target.value)}
//                 required
//                 ></input> 
//                 </div>
//         <div>
//             <label>Description</label>
//             <textarea
//                 type="textarea"
//                 placeholder="description *"
//                 name="Description"
//                 value={description}
//                 onChange={(e)=> setDescription(e.target.value)}
//                 required
//                 >{"This is where the text goes"}</textarea>
//         </div>
//         <div>
//         <label className="itemDetails__labels">Category</label>
//                                 <Select className="itemDetails__select" name="category" id="" placeholder="Please select">
//                                     <option className="itemDetails__select--option" value="1">Electronics</option>
//                                     <option className="itemDetails__select--option" value="2">Gear</option>
//                                     <option className="itemDetails__select--option" value="3">Apparel</option>
//                                     <option className="itemDetails__select--option" value="4">Accessories</option>
//                                     <option className="itemDetails__select--option" value="5">Health</option>
//                                 </Select>
//        {/* <label>Category</label>
//        <textarea
//                 type="select"
//                 // placeholder="itemName *"
//                 name="Category"
//                 value={category}
//                 onChange={(e)=> setCategory(e.target.value)}
//                 required
//                 ></textarea> */}
//         </div>
//         <div>
//        <label>Status</label>
//        <input
//                 // type="select"
//                 // placeholder="itemName *"
//                 name="Status"
//                 value={status}
//                 onChange={(e)=> setStatus(e.target.value)}
//                 required
//                 ></input>
//         </div>
//         <div>
//         <Select className="itemDetails__select" name="Please select" id="">
//                                 <option className="itemDetails__select--option" value="1">Manhattan</option>
//                                 <option className="itemDetails__select--option" value="2">Washington</option>
//                                 <option className="itemDetails__select--option" value="3">Jersey</option>
//                                 <option className="itemDetails__select--option" value="4">San Fran</option>
//                                 <option className="itemDetails__select--option" value="5">Santa Monica</option>
//                                 <option className="itemDetails__select--option" value="5">Seattle</option>
//                                 <option className="itemDetails__select--option" value="5">Miami</option>
//                             </Select>
//        {/* <label>Warehouse</label>
//        <input
//                 type="select"
//                 // placeholder="itemName *"
//                 name="Warehouse"
//                 value={warehouse}
//                 onChange={(e)=> setWarehouse(e.target.value)}
//                 required
//                 ></input> */}
//         </div>
//         <button type="button" onClick={(event) => (window.location.href = "/inventory")}>
//            Cancel
//         </button>
//         <button type="submit" >
//            Save
//         </button>
//     </form>
//     </div>

//     )
// }
// }



export default EditInventory;