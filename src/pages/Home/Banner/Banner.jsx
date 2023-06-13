import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {useNavigate} from "react-router-dom";


const Banner = () => {

    const navigate = useNavigate()

    return (
        <section className="banner">
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={
                        {delay: 3000}
                    }
                    speed={1500}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель!
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className="banner__title">
                                loft <br/>
                                мебель
                            </h2>
                            <p className="banner__text">
                                Современная и удобная мебель в Анапе
                            </p>
                            <button onClick={() => navigate('/catalog')} className="banner__btn">
                                СМОТРЕТЬ КАТАЛОГ
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Banner;