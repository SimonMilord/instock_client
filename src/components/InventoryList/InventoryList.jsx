import './InventoryList.scss';
import React from 'react';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class InventoryList extends React.Component {

    state = {
        inventoryData: [],



    }

    render() {



        return (

            <div>
                <div className='header'>

                </div>
                <section className='inventory'>
                    <header className='inventory__container'>
                        <div className='inventory__section'>
                            <h1 className='inventory__title'>Inventory</h1>
                            <div className='inventory__actions'>
                                <input className='inventory__actions-search' type='text' name='search' placeholder='Search...' />
                                <button className='inventory__actions-btn'>+ Add New Item</button>
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
                    <body className='card'>
                        <div className='card__section'>
                            <section className='card__content'>
                                <div className='card__content-div'>
                                    <h4 className='card__titles'>inventory item</h4>
                                    <Link className='card__text-link'>
                                        <h3 className='card__text-btn'>Phone Charger</h3>
                                    </Link>
                                </div>
                                <div className='card__content-div'>
                                    <h4 className='card__titles card__titles--padding'>category</h4>
                                    <p className='card__text'>Electronics</p>
                                </div>
                            </section >
                            <section className='card__content'>
                                <div className='card__content-div'>
                                    <h4 className='card__titles'>status</h4>
                                    <div className='card__in-stock'>
                                        <h3 className='card__text--in-stock active'>in stock</h3>
                                    </div>
                                    <div className='card__out-stock'>
                                        <h3 className='card__text--in-stock active'>in stock</h3>
                                    </div>
                                </div>
                                <div className='card__content-div'>
                                    <h4 className='card__titles'>qty</h4>
                                    <p className='card__text'>500</p>
                                </div>
                                <div className='card__content-div'>
                                    <h4 className='card__titles'>warehouse</h4>
                                    <p className='card__text'>King West</p>
                                </div>
                            </section>
                        </div>
                        <section className='card__content-bottom'>
                            <Link to='/'>
                                <img className='card__btn-delete' src={Delete} alt='delete Icon' />
                            </Link>
                            <Link to='/'>
                                <img className='card__btn-edit' src={Edit} alt='Edit Icon' />
                            </Link>
                        </section>
                    </body>

                </section>
            </div>

        );
    }
}

export default InventoryList;