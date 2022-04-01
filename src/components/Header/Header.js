import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">orders</Link>
                    <Link to="/inventory">inventory</Link>
                    <Link to="/about">about</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;