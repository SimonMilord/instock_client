import './InventoryCard.scss';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';

function InventoryCard(props) {

    return (

        <body className='cardList'>
            <div className='card '>
                <div className='card__box'>
                    <section className='card__subbox card__subbox--left'>
                        <div className='card__item card__item--link'>
                            <h4 className='card__label'>inventory item</h4>
                            <div className='card__link-box'>
                                <Link className='card__link-anchor' to='/inventory/:id'>
                                    <h3 className='card__link'>{props.itemName}</h3>
                                </Link>
                                <img className='card__link-icon' src={chevron} alt="chevron"></img>
                            </div>
                        </div>
                        <div className='card__item'>
                            <h4 className='card__label'>category</h4>
                            <p className='card__info card__info--category'>{props.category}</p>
                        </div>
                    </section >
                    <section className='card__subbox card__subbox--right'>
                        <div className='card__item'>
                            <h4 className='card__label'>status</h4>
                            <div className='card__stock--green active'>
                                <h3 className='card__stock--in'>{props.status}</h3>
                            </div>
                            <div className='card__stock--red active'>
                                <h3 className='card__stock--out'>{props.status}</h3>
                            </div>
                        </div>
                        <div className='card__item'>
                            <h4 className='card__label'>qty</h4>
                            <p className='card__info card__info--qty'>{props.quantity}</p>
                        </div>
                        <div className='card__item'>
                            <h4 className='card__label'>warehouse</h4>
                            <p className='card__info card__info--warehouse'>{props.warehouseName}</p>
                        </div>
                    </section>
                </div>
                <section className='card__actions'>
                    <Link to=''>
                        <img className='card__deleteBtn iconBtn' src={Delete} alt='delete Icon' />
                    </Link>
                    <Link to=''>
                        <img className='card__editBtn iconBtn' src={Edit} alt='Edit Icon' />
                    </Link>
                </section>
            </div>
        </body>

    )
}

export default InventoryCard;