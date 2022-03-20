import './InventoryList.scss';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InventoryCard from '../InventoryCard/InventoryCard';



class InventoryList extends React.Component {

    state = {
        inventories: [],
    };

    componentDidMount() {
        this.getAllInventories();
    }

    getAllInventories() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/inventory`)
            .then((res) => {
                // console.log(res);
                this.setState({
                    inventories: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }


    render() {

        const { inventories } = this.state;

        return (

            <div>
                <section className='inventory'>
                    <header className='inventory__container'>
                        <div className='inventory__section'>
                            <h1 className='inventory__title'>Inventory</h1>
                            <div className='inventory__actions'>
                                <input className='inventory__actions-search' type='text' name='search' placeholder='Search...' />
                                <Link to=''>
                                    <button className='inventory__actions-btn'>+ Add New Item</button>
                                </Link>
                            </div>
                        </div>
                        <ul className='inventory__list'>
                            <li className='inventory__list-item inventory__icon-1'>inventory item</li>
                            <li className='inventory__list-item inventory__icon-2'>category</li>
                            <li className='inventory__list-item inventory__icon-3'>status</li>
                            <li className='inventory__list-item inventory__icon-4'>qty</li>
                            <li className='inventory__list-item inventory__icon-5'>warehouse</li>
                            <li className='inventory__list-item inventory__icon-6'>actions</li>
                        </ul>
                    </header>
                    {this.state.inventories.map(item => {
                        return (
                            <InventoryCard
                                key={item.id}
                                {...item} />
                        )
                    })}
                </section>
            </div >

        );
    }
}

export default InventoryList;