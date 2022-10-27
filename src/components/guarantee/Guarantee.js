import './Guarantee.css'

const Guarantee = () => {
    const guaranteeData = [
        { name: 'Гарантия и Качество', description: 'Поддержка на всем пути следования! Отвезем до границы и обратно без каких либо проблем !', img: '' },
        { name: 'Легко и Уверенно', description: 'Пересечь границу и вернутся обратно максимально быстро! Приехали-Прошли-Уехали!', img: '' },
        { name: 'Лучшая цена', description: 'Работаем без посредников Без скрытых доплат и расходов! Оплата при посадке в автомобиль!', img: '' },
        { name: 'Надежно и комфортно', description: 'Опытные Водители! Свежие и комфортные авто бизнес класса!', img: '' },
        { name: 'Нам доверяют', description: 'К нам приходят по личным рекомендациям постоянных заказчиков! Новые клиенты всегда довольны поездкой на границу и обратно!', img: '' },
        { name: 'Ежедневный выезд', description: 'Поездка на границу в день обращения! Выезд из Москвы (М. Дубровка) с 19:00-21:00', img: '' }
    ]
    const MainGuarantee = guaranteeData.map((item, i) => {
        return (
            <div key={i} className='guaranteeItem'>
                <h3>{item.name}</h3>
                <div>
                    {item.description}
                </div>
            </div>
        )
    })
    return (
        <div className="guarantee">
            <div className="container">
                <h1>Наша Гарантия</h1>
                <div className="guaranteeMain">
                    {MainGuarantee}
                </div>
            </div>
        </div>
    )
}

export default Guarantee