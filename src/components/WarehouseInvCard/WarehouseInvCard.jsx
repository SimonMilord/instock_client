import './WarehouseInvCard.scss';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import Chevron from '../../assets/Icons/chevron_right-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';

export default class WarehouseInvCard extends Component {


    

    render() {
      
        return (
            <div className='card'>
                <h3 className='card__title card__title--mobile'>inventory item</h3>
                <Link className='link' to={''}>
                    <p className='link__text'>{this.props.itemName}</p>
                    <img className='link__image' src={Chevron}/>
                </Link>
                <h3 className='card__title'>category</h3>
                <p className='card__text'>{this.props.category}</p>
                <h3 className='card__title'>status</h3>
                <p className={this.props.status === 'In Stock' ? 'card__status': 'card__status card__status--out'}>{this.props.status}</p>
                <h3 className='card__title'>qty</h3>
                <p className='card__text'>{this.props.quantity}</p>
                <div className='card__actions'>
                    <button onClick= {()=>this.props.handlePopUp(this.props.id)}>
                        <img className='card__delete' src={Delete} alt="delete icon"/>
                    </button>
                    <Link to={``}>
                        <img className='card__edit' src={Edit} alt="edit icon"/>
                    </Link>
                </div>
            </div>
        )
    }
}