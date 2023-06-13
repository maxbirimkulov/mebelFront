
import {useContext} from "react";
import {CustomContext} from "../../config/context/context.jsx";
import {useNavigate} from "react-router-dom";

const Cart = () => {

    const {user,removeCartsCountMinus,addCartsCountPlus} = useContext(CustomContext)

    const navigate = useNavigate()
    return (
        <section className="cart">
            <div className="container">
                <div className="cart__top">
                    <h2 className="cart__title">
                        Ваша корзина
                    </h2>
                    <p className="cart__count">
                        {
                            user.carts?.reduce((acc,rec) => acc + rec.count , 0)
                        } предмета
                    </p>
                </div>
                <div className="cart__row">
                    {
                        user.carts?.map((item) => (
                            <div className="cart__card">
                                <div className="cart__card-item">
                                    <img src={`${item.images[0]}`} alt=""/>
                                    <div className="cart__card-info">
                                        <h3 className="cart__card-title">
                                            {item.title}
                                        </h3>
                                        <p className="cart__card-size">
                                            Размер(Ш×Д×В):
                                            {item.width} СМ X {item.height} СМ X {item.deep} СМ
                                        </p>

                                        <p className="cart__card-size">
                                            Количество :
                                            <div className='card__sizes-count'>
                                                <button style={{background: 'red'}} type='button' onClick={() => removeCartsCountMinus(item.id)}>-</button>
                                                <span>{
                                                    item.count
                                                }</span>
                                                <button style={{background:'green'}} type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                                            </div>
                                        </p>

                                    </div>
                                    <p className="cart__card-price">
                                        {item.price} ₽
                                        <br/>
                                        {
                                            item.price * item.count
                                        }₽
                                    </p>
                                </div>
                                <button className="cart__card-delete"

                                >
                                    X
                                </button>
                            </div>
                        ))
                    }

                </div>
                {
                    user.carts.length ? <div className="cart__bottom">
                        <p className="cart__bottom-count">
                            Итоговая стоимость: {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count , 0)}₽
                        </p>
                        <button className="cart__bottom-btn" onClick={() => navigate('/checkout')} >
                            Оформить заказ
                        </button>
                    </div> : ''
                }

            </div>
        </section>
    );
};

export default Cart;