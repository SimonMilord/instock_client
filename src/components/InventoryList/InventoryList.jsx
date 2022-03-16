import './InventoryList.scss';
import React from 'react';
// import InventoryCard from '../InventoryCard/InventoryCard'



function InventoryList() {

    return (

        <div>
            <div className='header'>

            </div>
        <header className='inventory'>
            <div className='inventory__container'>
                <section className='inventory__section'>
                    <h1 className='inventory__title'>Inventory</h1>
                    <div className='inventory__actions'>
                        <input className='inventory__actions-search' type='text' name='search' placeholder='Search...' />
                        <button className='inventory__actions-btn'>+ Add New Item</button>
                    </div>
                </section>
                <ul className='inventory__list'>
                    <li className='inventory__list-item inventory__icon-1'>inventory item</li>
                    <li className='inventory__list-item inventory__icon-2'>category</li>
                    <li className='inventory__list-item inventory__icon-3'>status</li>
                    <li className='inventory__list-item inventory__icon-4'>qty</li>
                    <li className='inventory__list-item inventory__icon-5'>warehouse</li>
                    <li className='inventory__list-item inventory__icon-6'>actions</li>
                </ul>
            </div>  
            {/* <InventoryCard /> */}   
        </header>
        </div>

    );
}

export default InventoryList;