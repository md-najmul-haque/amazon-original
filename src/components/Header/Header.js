import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">Shop</a>
                    <a href="./orders">orders</a>
                    <a href="/inventory">inventory</a>
                    <a href="/about">about</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;