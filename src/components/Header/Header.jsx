import { Link } from "react-router-dom";
import chevron from "../../assets/images/chevron-white.svg"
import "./Header.scss";

function Header() {
    return (
        <div className='header'>
            <a className='header__initiatives' href='https://www.bell.ca/bell-for-better' target='_blank'>
                See our current initiatives
                <img className='header__chevron' src={chevron} />
            </a>
        </div>
    );
}

export default Header;