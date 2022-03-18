
import WarehouseInvCard from '../WarehouseInvCard/WarehouseInvCard';
import './WarehouseInv.scss';



export default function WarehouseInv(props) {


    console.log(props.handlePopUp);
    const mappedInventory = props.inventory &&props.inventory.map(item => {
        return(
            <WarehouseInvCard
                key={item.id}
                {...item}
            />
        )
        })
 
    return (
        <div className='warehouse'>
            {mappedInventory}
        </div>
    ) 
}