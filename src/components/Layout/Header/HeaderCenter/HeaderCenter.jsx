import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from "../../../../assets/logo.svg"
import {IoIosSearch} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import {HiOutlineShoppingBag} from "react-icons/hi"
import {FiUser} from "react-icons/fi"
import {useContext, useEffect} from "react";
import {CustomContext} from "../../../../config/context/context.jsx";



const HeaderCenter = () => {

    const {user,logOutUser, search, setSearch} = useContext(CustomContext)

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname !== '/catalog'){
            setSearch('')
        }
    },[location.pathname])

    return (
        <nav className="header__center">
            <Link to={'/'}>
                <img src={logo} alt=""/>
            </Link>
            <div className="header__center-search">
                <div className="header__center-glass">
                    <IoIosSearch/>
                </div>
                <input
                    value={search}
                    type="search"
                    className="header__center-field"
                    placeholder="Поиск"
                    onChange={(e) => {
                        if (location.pathname !== '/catalog'){
                            navigate('/catalog')
                        }
                        setSearch(e.target.value)
                    }}
                />
            </div>
            <div className="header__center-icons">
                <Link to={'/favorites'} className="header__center-icon">
                    <AiOutlineHeart/>
                </Link>
                <Link to={user.email?.length ? '/cart' : '/login'} className="header__center-icon">
                    <HiOutlineShoppingBag className="header__center-icon"/>
                </Link>

                {
                    location.pathname === '/room' ? <span onClick={logOutUser}>Выйти</span> :  <Link to={user.email?.length ? '/room' : '/login'} className="header__center-icon">
                        <FiUser/>
                    </Link>
                }


            </div>
        </nav>
    );
};

export default HeaderCenter;