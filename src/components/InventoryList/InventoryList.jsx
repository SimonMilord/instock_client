import './InventoryList.scss';


function InventoryList () {

    return (
        <header className='inventory'>
            <section className='inventory__section'>
                <h1 className='inventory__title'>Inventory</h1>
                <div className='inventory__actions'>
                    <input className='inventory__actions-search' type='text' name='search' placeholder='Search...'/>
                    <button className='inventory__actions-btn'>+ Add New Item</button>
                </div>  
            </section>
            <ul className='inventory__list'>
                <li className='inventory__list-item'>inventory item</li>
                <li className='inventory__list-item'>category</li>
                <li className='inventory__list-item'>status</li>
                <li className='inventory__list-item'>qty</li>
                <li className='inventory__list-item'>warehouse</li>
                <li className='inventory__list-item'>actions</li>
            </ul>
            <InventoryCard />
        </header>

    );
}

export default InventoryList;