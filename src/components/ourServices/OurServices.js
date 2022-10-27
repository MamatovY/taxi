import { useState } from 'react'

import './OurServices.css'

import img1 from './../../assets/images/car1.jpg'
import img2 from './../../assets/images/car2.jpg'
import img3 from './../../assets/images/car3.jpg'
import cross from './../../assets/images/crossBlack.png'

const OurServices = () => {
    const [popupActive, setPopupActive] = useState(false)

    const servicesData = [
        { name: 'Казахстан', description: 'Поездка на Toyota Alphard Оплата при посадке Отправка ежедневно в 18.00 Общее время поездки 34 часа', img: img1 },
        { name: 'Корпоративным клиентам', description: 'Мы работаем и с юридическими лицами. Стоимость оговаривается индивидуально. Заберем пассажиров по указанному адресу.  ', img: img2 },
        { name: 'Заказ Минивэна', description: 'Заказ минивэна - это отличное решение для тех, кто едет большой компанией.Такси минивэн станет станет выгодным вариантом для поездки на дачу, вокзал, аэропорт, между городами, по России, в аэропорт, для любых междугородних путешествий.', img: img3 }
    ]
    const MainServices = servicesData.map((item, i) => {
        return (
            <div key={i} className='servicesItem'>
                <div>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <h3>{item.name}</h3>
                    <div>
                        {item.description}
                    </div>
                </div>
                <div onClick={() => setPopupActive(prev => !prev)} className="headerBtn">Заказать</div>
            </div>
        )
    })


    return (
        <div className="ourServices">
            <div className="container">
                <h1>
                    Наши Услуги
                </h1>
                <div className="servicesMain">
                    {MainServices}
                </div>

                <div className={popupActive ? 'popup active' : 'popup'}>
                    <div className="modal">

                        <div className="popupMain">
                            <form>
                                <h3>Заказать Звонок</h3>
                                <div className='popupNumber'>
                                    <input type="number" placeholder='Телефон' />
                                    <div><span>Должен начинаться на +7</span></div>
                                </div>

                                <div className="headerBtn">Заказать</div>
                            </form>
                            <div className="popupCross" onClick={() => setPopupActive(prev => !prev)}>
                                <img src={cross} alt="" />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default OurServices