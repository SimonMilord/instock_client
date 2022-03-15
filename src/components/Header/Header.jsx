import './Header.scss';
import { Link } from 'react-router-dom';
import InStockLogo from '../../assets/Logo/InStock-Logo_1x.png';


function Header() {
    return (
        <nav className='nav'>
            <Link className='nav__logo-link' to='/'>
                <img className='nav__logo-img' src={InStockLogo} alt='InStock logo' />
            </Link>
            <div className='nav__list'>
                <Link className='nav__list-link' to='/'>
                    WareHouses
                </Link>
                <Link className='nav__list-link' to='/Inventory'>
                    Inventory
                </Link>
            </div>
        </nav>

    );
}

export default Header;