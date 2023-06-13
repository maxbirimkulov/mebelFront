
//media
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {useContext} from "react";
import {CustomContext} from "../../config/context/context.jsx";
const ProductInfo = ({product}) => {

    const {favorites, favoritesHandler} = useContext(CustomContext)

    const colors = ['red', 'green', 'blue']

    return (
        <div className="product__info">
            <h2 className="product__info-title">
                {product.title}
            </h2>
            <p className="product__info-category">
                {product.category}
            </p>
            <div className="product__info-row">
                <p className="product__info-price">
                    {product.price}₽
                </p>
                <button className="product__info-btn">
                    Купить
                </button>
                <p className="product__info-fav" onClick={() => favoritesHandler(product)}>

                    {
                        favorites.some(el => el.id === product.id) ? <AiFillHeart color={'red'}/> :   <AiOutlineHeart/>
                    }
                    Добавить в желаемое
                </p>
            </div>
            <div className="product__info-selects">
                <ul className="product__info-colors">
                    {
                        colors.map((item,idx) => (
                            <li key={idx} style={{background: item}}>
                               ss
                            </li>
                        ))
                    }
                </ul>
                <ul className="product__info-count">
                    <li>
                        1
                    </li>
                </ul>
                <ul className="product__info-sizes">
                    <li>
                        {product.width} СМ x {product.height} СМ x {product.deep} СМ
                    </li>
                </ul>
            </div>
            <div className="product__info-description">
                <h2>Описание</h2>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;