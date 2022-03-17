import "./EditInventory.scss";
import { useContext, useState } from "react";
import InventoryList from "../InventoryList/InventoryList";


const EditInventory = ({inventoryItem} =>{

    const id = inventoryItem.id;

    const [itemName, setName] = useState(inventoryItem.itemName);
    const [description, setDescription] = useState(inventoryItem.description);
    const [category, setCategory] = useState(inventoryItem.category);
    const [status, setStatus] = useState(inventoryItem.status);
    const [warehouse, setWarehouse] = useState(inventoryItem.warehouse);

    const {updateInventory} = useContext{InventoryList};

    const updatedInventory = {itemName, description, category, status, warehouse};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateInventory(id, updateInventory)
    }

    return (
        <Form onSubmit={handleSubmit}>
        <div>
                type="text"
                placeholder="itemName *"
                name="Item Name"
                value={itemName}
                onChange={(e)=> setName(e.target.value)}
                required
        </div>
        <div>
                type="textarea"
                placeholder="description *"
                name="Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
          
        </div>
        <div>
       
                type="select"
                // placeholder="itemName *"
                name="Category"
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
                required
        
        </div>
        <div>
       
                type="select"
                // placeholder="itemName *"
                name="Status"
                value={status}
                onChange={(e)=> setStatus(e.target.value)}
                required
           
        </div>
        <div>
       
                type="select"
                // placeholder="itemName *"
                name="Warehouse"
                value={warehouse}
                onChange={(e)=> setWarehouse(e.target.value)}
                required
         
        </div>
        <Button variant="success" type="button" onClick={(event) => (window.location.href = "/inventory")}>
           Cancel
        </Button>
        <Button variant="success" type="submit" >
           Save
        </Button>
    </Form>

    )
}

export default EditInventory;  
