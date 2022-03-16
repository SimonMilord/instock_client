import './WarehouseInvCard.scss';
import {Link} from 'react-router-dom';
import Chevron from '../../assets/Icons/chevron_right-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';

export default function WarehouseInvCard(props) {

    return (
        <div className='card'>
            <h3 className='card__title card__title--mobile'>inventory item</h3>
            <Link className='link' to={props.id}>
                <p className='link__text'>{props.itemName}</p>
                <img className='link__image' src={Chevron}/>
            </Link>
            <h3 className='card__title'>category</h3>
            <p className='card__text'>{props.category}</p>
            <h3 className='card__title'>status</h3>
            <p className={props.status === 'In Stock' ? 'card__status': 'card__status card__status--out'}>{props.status}</p>
            <h3 className='card__title'>qty</h3>
            <p className='card__text'>{props.quantity}</p>
            <div className='card__actions'>
                <Link to={`/warehouse/${warehousename}/inventory/${id}/delete`}>
                    <image className='card__delete' src={Delete}/>
                </Link>
                <Link to={`/inventory/${id}/edit`}>
                    <image className='card__edit' src={Edit} alt="edit icon"/>
                </Link>
            </div>
        </div>
    )
}