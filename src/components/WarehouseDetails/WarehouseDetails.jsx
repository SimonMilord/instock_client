import React, { Component } from 'react';
import axios from 'axios';
import './WarehouseDetails.scss';
import { Link } from 'react-router-dom';



export default class WarehouseDetails extends Component {

    state = {
        warehouseData: {},
        inventory: [],
        contact: []
    }

    url = process.env.REACT_APP_API_URL;

    async fetchInventory (id) {
        try {
            const invResponse = await axios.get(`${url}/warehouse/${id}/inventory`)
            this.setState ({
                inventory: invResponse.data
            })
        }catch(err) {console.log(err)}
    }

    async fetchWarehouseData (id) {
        try {
            const response = await axios.get(`${url}/warehouse/${id}`)
            this.setState({
                warhouseData: response.data,
            })
            this.fetchInventory(id);
        } catch(err) {console.log(err)}
    }

    componentDidMount (){
        this.fetchWarehouseData(this.props.match.params.id);
    }

    render() {
        return (
            <div className='details'>
                <div className='details__titlebar'>
                    <Link className='details__link'>
                        <img className='details__imd' alt='black arrow'/>
                        <h2 className='details__warehouse'></h2>
                    </Link>
                </div>
                <div className='details__address'>
                    <h3 className='details__subtitles'>warehouse address:</h3>
                    <p className='details__text'>
                        {this.state.warehouseData.address}
                        {","}
                        <br />
                        {this.state.warehouseData.city}
                        {","}
                        {this.state.warehouseData.country}
                    </p>
                </div>
                <div className='details__contact'>
                    <div className='details__contact--name'>
                        <h3 className='details__subtitles'>contact name:</h3>
                        <p className='details__text'>
                            {this.state.warehouseData.contact.name}
                            <br />
                            {this.state.warehouseData.contact.position}
                        </p>
                    </div>
                    <div className='details__contact--info'>
                    <h3 className='details__subtitles'>contact information:</h3>
                        <p className='details__text'>
                            {this.state.warehouseData.contact.phone}
                            <br />
                            {this.state.warehouseData.contact.email}
                        </p>
                    </div>
                </div>
                <div className='details__inv'>
                    <WarehouseInv list = {this.state.inventory} />
                </div>
            </div>  
        )
    }
}