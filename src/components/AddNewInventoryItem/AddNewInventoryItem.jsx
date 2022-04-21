import './AddNewInventoryItem.scss';
import { Component } from "react";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg"
import axios from "axios";
import { Link } from 'react-router-dom';

export default class AddNewInventoryItem extends Component {

    state ={
        warehouseData: [],
        warehouseId: '',
        warehouseName: '',
        name: "",
        description: "",
        category: "",
        status: "",
        quantity: 0,
        warehouse: "",
    }

    getMappedWarehouses = (warehouseData) => {
        const mapWarehouse = warehouseData.map((warehouse) => {
            return (
                <option key={warehouse.id} id={warehouse.id} className="addInventoryForm__select--option" value={JSON.stringify({warehouseName: warehouse.name, warehouseId: warehouse.id})}>{warehouse.name}</option>
            )
        })
        return mapWarehouse
    }

    async fetchWarhouseData () {
        const allWarehouses = await axios.get(`${process.env.REACT_APP_API_URL}/warehouses`)
        this.setState({
            warehouseData: allWarehouses.data
        })
    }

    componentDidMount(){
        // axios.get(`${process.env.REACT_APP_API_URL}/inventory/${this.props.match.params.id}`)
        // .then(res => {
        //     this.setState({
        //         id: res.data.id,
        //         warehouseId: res.data.warehouseId,
        //         warehouseName: res.data.warehouseName,
        //         name: res.data.itemName,
        //         description: res.data.description,
        //         category: res.data.category,
        //         status: res.data.status,
        //         quantity: res.data.quantity,
        //         warehouse: res.data.warehouse
        //     });
        // })
        this.fetchWarhouseData()
    }

    addName = event =>{
        this.setState({name: event.target.value});
        // return event.target.value;
    }

    addDescription = event => {
        this.setState({description: event.target.value});
    }

    addCategory = event => {
        this.setState({category: event.target.value});
    }

    addStatus = event => {
        this.setState({status: event.target.value});
    }

    addQuantity = event => {
        this.setState({quantity: event.target.value});
    }

    addWarehouseName = event => {
        const optionValue = JSON.parse(event.target.value)
        this.setState({
            warehouseName: optionValue.warehouseName,
            warehouseId: optionValue.warehouseId
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const warehouseName = this.state.warehouseName;
        const warehouseId = this.state.warehouseId;
        const itemName = this.state.name;
        const description = this.state.description;
        const category = this.state.category;
        const status = this.state.status;
        const quantity = status === 'Out of Stock'? 0 : this.state.quantity;

        axios.post(`${process.env.REACT_APP_API_URL}/inventory/add`, {
        warehouseName,
        warehouseId,
        itemName,
        description,
        category,
        status,
        quantity
        }).then((res) => {
            window.alert("item added to inventory")
        }).catch((err) => {
            console.err(err);
        });
    }

    render() {
        return(
        <div className="addInventory">
            <div className="addInventoryHeader">
                <Link className='addInventoryHeader__link' to={'/inventory'}>
                    <img className="addInventoryHeader__icon" src={arrowBack} alt="arrow back"></img>
                </Link>
                <h1 className="addInventoryHeader__heading">Add inventory item</h1>
            </div>
            <div className="addInventoryForm">
                <form className="addInventoryForm__form" action="" onSubmit={this.handleSubmit} autoComplete='off'>
                    <div className="addInventoryForm__fields-container">
                        <div className="addInventoryForm__fields-container-left">
                        <h2 className="addInventoryForm__heading">Item Details</h2>
                        <div className="addInventoryForm__field">
                            <label  className="addInventoryForm__label">
                                <h3 className="addInventoryForm__label-text">Item Name</h3>
                            </label>
                            <input
                                className="addInventoryForm__input"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.addName}
                                // required
                            ></input>
                        </div>
                        <div className="addInventoryForm__field">
                            <label  className="addInventoryForm__label">
                                <h3 className="addInventoryForm__label-text">Description</h3>
                            </label>
                            <textarea className="addInventoryForm__textarea"
                                type="text"
                                placeholder="description"
                                name="Description"
                                // value={this.state.description}
                                onChange={this.addDescription}
                                // required
                            ></textarea>
                        </div>
                        <div className="addInventoryForm__field">
                            <label  className="addInventoryForm__label">
                                <h3  className="addInventoryForm__label-text">Category</h3>
                            </label>
                            <select className="addInventoryForm__dropdown" name="Category" id="" placeholder="Please select" onChange={this.addCategory}>
                                <option className="addInventoryForm__select--option" value="Electronics">Electronics</option>
                                <option className="addInventoryForm__select--option" value="Gear">Gear</option>
                                <option className="addInventoryForm__select--option" value="Apparel">Apparel</option>
                                <option className="addInventoryForm__select--option" value="Accessories">Accessories</option>
                                <option className="addInventoryForm__select--option" value="Health">Health</option>
                            </select>
                        </div>
                        </div>
                        <div className="addInventoryForm__fields-container-right">
                        <h2 className="addInventoryForm__heading">Item Availability</h2>
                        <div className="addInventoryForm__statusField">
                            <h3>Status</h3>
                            <div className="addInventoryForm__statusContainer">
                                <div className="addInventoryForm__statusRadio" >
                                <input  type="radio" id="radio-1" name="stock_status" value='In Stock' checked={this.state.status === "In Stock"} onChange={this.addStatus}/>
                                <label>In Stock</label>
                                </div>
                                <div className="addInventoryForm__statusRadio">
                                <input  type="radio" id="radio-2" name="stock_status" value='Out of Stock' checked={this.state.status === "Out of Stock"} onChange={this.addStatus}/>
                                <label >Out of Stock</label>
                                </div>
                            </div>
                        </div>
                        <div className="addInventoryForm__field" style={{display: this.state.status === 'In Stock' ? "flex": "none", flexDirection: "column"}}>
                            <label className="addInventoryForm__label">
                                <h3 className="addInventoryForm__label-text">Quantity</h3>
                            </label>
                            <input
                                className="addInventoryForm__input"
                                type="text"
                                name="Item Name"
                                // value={this.state.quantity}
                                onChange={this.addQuantity}
                                required
                            ></input>
                        </div>
                        <div className="addInventoryForm__field">
                            <label className="addInventoryForm__label">
                                <h3  className="addInventoryForm__label-text">Warehouse</h3>
                            </label>
                            <select className="addInventoryForm__dropdown" onChange={this.addWarehouseName}>
                                {this.getMappedWarehouses(this.state.warehouseData)}
                            </select>
                        </div>
                    </div></div>
                    <div className="buttonContainer">
                    <Link className='addInventoryForm__cancelBtn' to={'/inventory'}>
                        <button className="buttonSecondary" type="button">
                            Cancel
                        </button>
                    </Link>
                    <button className="buttonPrimary" type="submit" >
                        + Add Item
                    </button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
