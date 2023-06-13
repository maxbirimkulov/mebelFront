import React, {useContext, useState} from "react";
import {CustomContext} from "../../config/context/context.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const Checkout = () => {


    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()
    const {user, addOrder} = useContext(CustomContext)

    const [popup, setPopup] = useState(false)
    const [count, setCount] = useState(15)

    const navigate = useNavigate()


    const submitForm = (data) => {
        let order = {
            ...data,
            status: 'pending',
            order: user.carts,
            totalPrice: user.carts?.reduce((acc, rec) => acc + rec.price * rec.count , 0)
        }
        addOrder(order, setPopup,redirect)

    }

    const redirect = () => {
        setInterval(() => {
            setCount(prev => {
                if (prev < 2) {
                    navigate('/')
                    return 1
                }
                return prev - 1
            })
        },1000)
    }


    return (
        <section className="checkout">
            <div className="container">
                <h2 className="cart__title">
                    Оформление заказа
                </h2>
                <form className="checkout__form" onSubmit={handleSubmit(submitForm)}>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Данные покупателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('name')} value={user.name} type="text" className="checkout__form-field" placeholder="Имя"/>
                            <input {...register('email')} value={user.email} type="email" className="checkout__form-field" placeholder="E-mail"/>
                            <input {...register('phone')} value={user.phone} type="tel" className="checkout__form-field" placeholder="Телефон"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Ваш заказ
                        </h3>
                        <ul className="checkout__form-list">
                            <li className="checkout__form-item">
                                <p className="checkout__form-product">
                                    Товар
                                </p>
                                <p className="checkout__form-price">
                                    Всего
                                </p>
                            </li>
                            {
                                user.carts?.map((item) => (
                                    <li key={item.id} className="checkout__form-item">
                                        <p className="checkout__form-product">
                                            {item.title}
                                        </p>
                                        <p className="checkout__form-price">
                                            {item.count} /  {item.price * item.count} ₽
                                        </p>
                                    </li>
                                ))

                            }
                            <li className="checkout__form-item checkout__form-item_count">
                                <p className="checkout__form-product">
                                    Итоговая стоимость:
                                </p>
                                <p className="checkout__form-price">
                                     {user.carts?.reduce((acc, rec) => acc + rec.price * rec.count , 0)}₽
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Адрес получателя
                        </h3>
                        <div className="checkout__form-fields">
                            <input {...register('country')} type="text" className="checkout__form-field" placeholder="Страна"/>
                            <input {...register('city')} type="text" className="checkout__form-field" placeholder="Город"/>
                            <input {...register('street')} type="text" className="checkout__form-field" placeholder="Улица"/>
                            <input {...register('home')} type="text" className="checkout__form-field" placeholder="Дом"/>
                            <input {...register('flat')} type="text" className="checkout__form-field" placeholder="Квартира"/>
                        </div>
                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Способы оплаты
                        </h3>
                        <div className="checkout__form-list">
                            <label className="checkout__form-label">
                                <input type="checkbox"/>
                                Оплата наличными
                            </label>
                            <button className="checkout__form-btn" type="submit">
                                Разместить заказ
                            </button>
                        </div>

                    </div>
                    <div className="checkout__form-block">
                        <h3 className="checkout__form-title">
                            Комментарии
                        </h3>
                        <textarea {...register('info')} className="checkout__form-commit" placeholder="Дополнительна информация"></textarea>
                    </div>
                </form>
            </div>
            {
                popup ? <div className='checkout__popup' >
                    <h2>Ваш заказ успешно отправлен</h2>
                    <p>Через {count} секунд вас перекинет на главную страницу</p>
                    <button onClick={() => navigate('/')}>Перейти на главную страницу</button>
                </div> : ''
            }

        </section>
    );
};

export default Checkout;