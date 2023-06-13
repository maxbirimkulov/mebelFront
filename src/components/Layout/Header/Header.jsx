import HeaderTop from "./HeaderTop/HeaderTop.jsx";
import HeaderCenter from "./HeaderCenter/HeaderCenter.jsx";
import {useLocation} from "react-router-dom";


const Header = () => {


    const location = useLocation()

    return (
        <header className="header">

            {
                location.pathname === '/' ?    <HeaderTop/> : ''
            }

            <div className="container">
                <HeaderCenter/>
            </div>
        </header>
    );
};

export default Header;