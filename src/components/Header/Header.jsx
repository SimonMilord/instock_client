import './Header.scss';
import { Link } from 'react-router-dom';
import InStockLogo from '../../assets/Logo/InStock-Logo_2x.png';


function Header() {
    return (
        <nav className='nav'>
            <div className='nav__container'>
                <Link className='nav__logo-link' to='/'>
                    <img className='nav__logo-img' src={InStockLogo} alt='InStock logo' />
                </Link>
                <div className='nav__list'>
                    <Link className='nav__list-link--warehouses' to='/'>
                        <h3 className='nav__list-text--warehouses'>Warehouses</h3>
                    </Link>
                    <Link className='nav__list-link--inventory' to='/Inventory'>
                        <h3 className='nav__list-text--inventory'>Inventory</h3>
                    </Link>
                </div>
            </div>
        </nav>

    );
}

export default Header;