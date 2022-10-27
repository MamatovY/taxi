import './review.css'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";


import "swiper/swiper-bundle.css";




import iphone from './../../assets/images/iphone.jpg'
import ava1 from './../../assets/images/ava1.jpg'
import ava2 from './../../assets/images/ava2.jpg'
import ava3 from './../../assets/images/ava3.png'

const Review = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);
    const reviewData = [
        {
            name: 'Алтынай Саматова',
            theme: 'Качественные услуги',
            description: 'Благодаря этой компании без проблем доехала до границы и обратно. Переживала, но благодаря качественной работе компании все прошло успешно. В пути все было хорошо, не дорого и удобно. Помогли обновить миграционную карту , объяснили как заполнять. Машина была приличная, на которой ехали. Все очень комфортно.',
            img: ava3
        },
        {
            name: 'Владислав Макаров',
            theme: 'Долго искали, нашли здесь!',
            description: 'Нужно было сделать новую миграционную карту, стал искать варианты. Обратился в эту компанию по рекомендациям. Все прошло безупречно и быстро. Проблем никаких не возникло. Огромное спасибо за помощь',
            img: ava1
        },
        {
            name: 'Инна Ивановна',
            theme: 'Лучший сервис, который мы видели',
            description: 'Столкнулась с вопросом получения новой миграционной карты. Поискала, знакомые посоветовали вашу компанию. Поехала на границу Украины в Белгород. Все документы получила без проблем, поездка прошла спокойно - все хорошо. Спасибо.',
            img: ava2
        },
    ]

    return (
        <div className="review">
            <div className="container">
                <div className="reviewSwiper">
                    <h1>Отзывы клиентов</h1>

                    <Swiper
                        // autoplay
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={50}
                        navigation
                        pagination
                    >
                        {reviewData.map((elem, i) => {
                            return (
                                <SwiperSlide key={`slide-${i}`} >
                                    <div className='itemAll'>
                                        <h3>{elem.theme}</h3>
                                        <p>
                                            {elem.description}
                                        </p>
                                        <div>
                                            <h4>
                                                {elem.name}
                                            </h4>
                                            <div className="ava">
                                                <img src={elem.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className="reviewImg">
                    <img src={iphone} alt=" " />
                </div>
            </div>
        </div>
    )
}

export default Review