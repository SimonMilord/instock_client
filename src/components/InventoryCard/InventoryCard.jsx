import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
// import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from 'react-router-dom';

function InventoryCard(props) {

    return (

        <body className='card'>
        <div className='card__section'>
            <section className='card__content'>
                <div className='card__content-div'>
                    <h4 className='card__titles'>inventory item</h4>
                    <Link className='card__text-link'>
                        <h3 className='card__text-btn'>{props.itemName}</h3>
                        {/* <h3 className='card__text-btn'>Cell Phone<img className='card__text-icon' src={chevron} alt="chevron"/></h3> */}
                    </Link>
                </div>
                <div className='card__content-div'>
                    <h4 className='card__titles card__titles--padding'>category</h4>
                    <p className='card__text'>{props.category}</p>
                    {/* <p className='card__text'>electronics</p> */}
                </div>
            </section >
            <section className='card__content'>
                <div className='card__content-div'>
                    <h4 className='card__titles'>status</h4>
                    <div className='card__in-stock'>
                        <h3 className='card__text--in-stock active'>in stock</h3>
                    </div>
                    <div className='card__out-stock'>
                        <h3 className='card__text--in-stock active'>{props.status}</h3>
                        {/* <h3 className='card__text--in-stock active'>in stock</h3> */}
                    </div>
                </div>
                <div className='card__content-div'>
                    <h4 className='card__titles'>qty</h4>
                    <p className='card__text'>{props.quantity}</p>
                    {/* <p className='card__text'>500</p> */}
                </div>
                <div className='card__content-div'>
                    <h4 className='card__titles'>warehouse</h4>
                    <p className='card__text'>{props.warehouseName}</p>
                    {/* <p className='card__text'>New York</p> */}
                </div>
            </section>
        </div>
        <section className='card__content-bottom'>
            <Link to=''>
                <img className='card__btn-delete' src={Delete} alt='delete Icon' />
            </Link>
            <Link to=''>
                <img className='card__btn-edit' src={Edit} alt='Edit Icon' />
            </Link>
        </section>
    </body> 

    )
}

export default InventoryCard;